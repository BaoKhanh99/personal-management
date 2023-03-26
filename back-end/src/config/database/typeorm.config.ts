import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import databaseConfig from './database.config';
import { LoggerModule } from '../logger/logger.module';
import { QueryLogger } from '../logger/query.logger';

export const typeOrmConfig: TypeOrmModuleOptions = databaseConfig;

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [LoggerModule],
  inject: [QueryLogger],
  useFactory: async (logger: QueryLogger): Promise<TypeOrmModuleOptions> => {
    return { ...databaseConfig, logger };
  },
};
