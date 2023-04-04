import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { UserModule } from './models/users/user.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './config/app/config.module';
import { LoggerModule } from './common/logger/logger.module';
import { LoggerMiddleware } from './common/logger/logger.middleware';
import { DatabaseProviderModule } from './providers/database/database-provider.module';
import { AsyncRequestContextModule } from './common/async-request-context/async-request-context.module';

@Module({
  imports: [
    UserModule,
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
