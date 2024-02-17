import { Injectable } from '@nestjs/common';

import { CashFlowRepository } from './cash-flow.repository';

import {
  CashFlowRecord,
  CategoryAndSubs,
} from '@/providers/excel-import/types/cash-flow.type';

@Injectable()
export class CashFlowService {
  constructor(private readonly CashFlowRepo: CashFlowRepository) {}

  async import({
    cashFlowRecords,
    allCategories,
  }: {
    cashFlowRecords: CashFlowRecord[];
    allCategories: CategoryAndSubs[];
  }) {
    console.log(allCategories);
  }
}
