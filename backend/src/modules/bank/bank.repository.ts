import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Bank } from './bank.entity';

@Injectable()
export class BankRepository extends Repository<Bank> {
  constructor(private readonly _dataSource: DataSource) {
    super(Bank, _dataSource.manager);
  }
}
