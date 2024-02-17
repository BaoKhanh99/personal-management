import { Inject, Injectable } from '@nestjs/common';
import { Workbook } from 'exceljs';

import {
  CashFlowFields,
  CashFlowHeader,
  CashFlowRecord,
  CategoryAndSubs,
  columnWithoutConvert,
  defaultCashFlowRecord,
} from './types/cash-flow.type';

import { EXCEL_JS } from '@/common/constants/app.constant';
import { AccountType, CashFlowType } from '@/common/entities/entity.enum';

@Injectable()
export class ExcelImportService {
  constructor(
    @Inject(EXCEL_JS)
    private readonly workbook: Workbook,
  ) {}

  async handleCashFlowFile(file: Express.Multer.File): Promise<{
    cashFlowRecords: CashFlowRecord[];
    allCategories: CategoryAndSubs[];
  }> {
    const records: CashFlowRecord[] = [];
    const { worksheets } = await this.workbook.xlsx.load(file.buffer);
    const { columns } = worksheets[0];

    const categories: string[] = columns[2].values
      .slice(2, columns[2].values.length)
      .filter((value, index, arr) => {
        return arr.indexOf(value) === index;
      }) as any;

    const allCategories: CategoryAndSubs[] = categories.map((category) => {
      const subs = columns[3].values.map((sub, index) => {
        if (columns[2].values[index] === category) {
          return sub;
        }
      });

      return {
        [category]: subs.filter((value, index, arr) => {
          return arr.indexOf(value) === index;
        }) as any,
      };
    });

    worksheets[0].eachRow((row, rowNumber) => {
      const record: CashFlowRecord = defaultCashFlowRecord;

      if (rowNumber === 1) {
        return;
      }

      columnWithoutConvert.forEach((a) => {
        Object.assign(record, { [CashFlowFields[a]]: row.values[a] || null });
      });

      Object.assign(record, {
        [CashFlowFields[CashFlowHeader.AccountType]]:
          AccountType[row.values[CashFlowHeader.AccountType]],
      });

      const fieldType =
        row.values[CashFlowHeader.Type] === 'Income'
          ? CashFlowType.Income
          : CashFlowType.Expense;

      Object.assign(record, {
        [CashFlowFields[CashFlowHeader.Type]]: fieldType,
      });

      records.push({ ...record });
    });

    return { cashFlowRecords: records, allCategories };
  }
}
