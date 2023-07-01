import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AsyncRequestContextModule } from './common/async-request-context/async-request-context.module';
import { LoggerMiddleware } from './common/logger/logger.middleware';
import { LoggerModule } from './common/logger/logger.module';
import { AppConfigModule } from './config/app/config.module';
import { ToDoModule } from './models/to-dos/to-do.module';
import { UserModule } from './models/users/user.module';
import { DatabaseProviderModule } from './providers/database/database-provider.module';

@Module({
  imports: [
    UserModule,
    ToDoModule,
    AuthModule,
    AppConfigModule,
    DatabaseProviderModule,
    AsyncRequestContextModule.forRoot({ isGlobal: true }),
    LoggerModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
