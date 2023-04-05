import { NestFactory, Reflector } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonModule } from 'nest-winston';

import { AppModule } from './app.module';
import { EntityNotFoundFilter } from './common/filters/entity-not-found.filter';
import { AsyncRequestContext } from './common/async-request-context/async-request-context.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UnauthorizedFilter } from './common/filters/unauthorized.filter';
import { AppConfigService } from './config/app/config.service';
import { loggerOption } from './common/logger/logger.option';
import { LoggerInterceptor } from './common/logger/logger.interceptor';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(loggerOption),
  });

  const reflector = app.get(Reflector);
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  const asyncRequestContext = app.get(AsyncRequestContext);
  const appConfig: AppConfigService = app.get(AppConfigService);

  app.useGlobalFilters(
    new EntityNotFoundFilter(logger, asyncRequestContext),
    new UnauthorizedFilter(logger, asyncRequestContext),
  );

  app.useGlobalInterceptors(new LoggerInterceptor(logger, asyncRequestContext));

  app.useGlobalGuards(new JwtAuthGuard(reflector));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (error) => new BadRequestException(error),
    }),
  );

  app.enableCors();

  await app.listen(appConfig.getPort());
}
bootstrap();
