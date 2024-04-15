import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BankController } from './bank.controller';
import { Bank } from './bank.entity';
import { BankRepository } from './bank.repository';
import { BankService } from './bank.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bank])],
  controllers: [BankController],
  providers: [BankRepository, BankService],
})
export class BankModule {}
