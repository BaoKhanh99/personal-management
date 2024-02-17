import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CashFlow } from './cash-flow.entity';

@Injectable()
export class CashFlowRepository extends Repository<CashFlow> {
  constructor(private readonly _dataSource: DataSource) {
    super(CashFlow, _dataSource.manager);
  }
}
