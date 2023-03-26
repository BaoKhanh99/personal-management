import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonModule } from 'nest-winston';

import { AppModule } from './app.module';
import { EntityNotFoundFilter } from './common/filters/entity-not-found.filter';
import { loggerOption } from './config/logger/logger.option';
import { AsyncRequestContext } from './config/async-request-context/async-request-context.service';
import { LoggerInterceptor } from './config/logger/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(loggerOption),
  });
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  const asyncRequestContext = app.get(AsyncRequestContext);

  app.useGlobalFilters(new EntityNotFoundFilter(logger, asyncRequestContext));

  app.useGlobalInterceptors(new LoggerInterceptor(logger, asyncRequestContext));

  await app.listen(3000);
}
bootstrap();
