import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CashFlowModule } from './modules/cash-flow/cash-flow.module';

@Module({
  imports: [CashFlowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
