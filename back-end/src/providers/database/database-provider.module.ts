import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { LoggerModule } from '../../common/logger/logger.module';
import { QueryLogger } from '../../common/logger/query.logger';
import { DatabaseConfigModule } from '../../config/database/config.module';
import { DatabaseConfigService } from '../../config/database/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [LoggerModule, DatabaseConfigModule],
      inject: [QueryLogger, DatabaseConfigService],
      useFactory: async (
        logger: QueryLogger,
        config: DatabaseConfigService,
      ): Promise<TypeOrmModuleOptions> => {
        return {
          type: 'postgres',
          host: config.getHost(),
          port: +config.getPort(),
          database: config.getName(),
          username: config.getUsername(),
          password: config.getPassword(),
          entities: ['dist/**/*.entity.js'],
          logger,
        };
      },
    }),
  ],
})
export class DatabaseProviderModule {}
