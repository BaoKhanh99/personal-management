import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import { loggerOption } from './logger.option';
import { QueryLogger } from './query.logger';

@Module({
  imports: [WinstonModule.forRootAsync({ useFactory: () => loggerOption })],
  providers: [QueryLogger],
  exports: [QueryLogger],
})
export class LoggerModule {}
