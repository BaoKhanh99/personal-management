import { NestFactory, Reflector } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonModule } from 'nest-winston';

import { AppModule } from './app.module';
import { EntityNotFoundFilter } from './common/filters/entity-not-found.filter';
import { loggerOption } from './config/logger/logger.option';
import { AsyncRequestContext } from './config/async-request-context/async-request-context.service';
import { LoggerInterceptor } from './config/logger/logger.interceptor';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UnauthorizedFilter } from './common/filters/unauthorized.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(loggerOption),
  });
  const reflector = app.get(Reflector);

  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  const asyncRequestContext = app.get(AsyncRequestContext);

  app.useGlobalFilters(
    new EntityNotFoundFilter(logger, asyncRequestContext),
    new UnauthorizedFilter(logger, asyncRequestContext),
  );

  app.useGlobalInterceptors(new LoggerInterceptor(logger, asyncRequestContext));

  app.useGlobalGuards(new JwtAuthGuard(reflector));

  await app.listen(3000);
}
bootstrap();
