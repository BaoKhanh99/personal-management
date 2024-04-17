import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BankAccountModule } from './modules/bank-account/bank-account.module';
import { BankModule } from './modules/bank/bank.module';
import { CashFlowModule } from './modules/cash-flow/cash-flow.module';

@Module({
  imports: [CashFlowModule, DatabaseModule, BankModule, BankAccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
