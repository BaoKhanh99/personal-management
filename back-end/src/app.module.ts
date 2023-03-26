import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmAsyncConfig } from './config/database/typeorm.config';
import { UserModule } from './users/user.module';
import { LoggerMiddleware } from './config/logger/logger.middleware';
import { AsyncRequestContextModule } from './config/async-request-context/async-request-context.module';
import { LoggerModule } from './config/logger/logger.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    AsyncRequestContextModule.forRoot({ isGlobal: true }),
    LoggerModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
