import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { BankAccount } from './bank-account.entity';

@Injectable()
export class BankAccountRepository extends Repository<BankAccount> {
  constructor(private readonly _dataSource: DataSource) {
    super(BankAccount, _dataSource.manager);
  }
}
