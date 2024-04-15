import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BankModule } from './modules/bank/bank.module';
import { CashFlowModule } from './modules/cash-flow/cash-flow.module';

@Module({
  imports: [CashFlowModule, DatabaseModule, BankModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
