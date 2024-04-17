import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BankAccountController } from './bank-account.controller';
import { BankAccount } from './bank-account.entity';
import { BankAccountRepository } from './bank-account.repository';
import { BankAccountService } from './bank-account.service';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount])],
  controllers: [BankAccountController],
  providers: [BankAccountRepository, BankAccountService],
})
export class BankAccountModule {}
