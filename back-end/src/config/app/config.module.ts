import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './configuration';
import { AppConfigService } from './config.service';

const configService = {
  provide: 'CONFIG_SERVICE',
  useClass: AppConfigService,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_ENV: Joi.string().valid('development', 'production', 'test'),
        APP_NAME: Joi.string(),
        APP_PORT: Joi.number(),
        APP_TZ: Joi.string(),
        APP_PUBLIC_KEY: Joi.string(),
        APP_PRIVATE_KEY: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, configService, AppConfigService],
  exports: [ConfigService, configService, AppConfigService],
})
export class AppConfigModule {}
