import { AccountType, CashFlowType } from '@/common/entities/entity.enum';

export type CashFlowRecord = {
  transactionDate: Date;
  accountType: AccountType;
  category: string;
  subCategory?: string;
  note?: string;
  amount: number;
  type: CashFlowType;
  description?: string;
};

export const CashFlowExcelType = ['Exp.', 'Income'];

export enum CashFlowHeader {
  Period = 1,
  AccountType,
  Category,
  SubCategory,
  Note,
  Amount,
  Type,
  Description,
}

export const defaultCashFlowRecord: CashFlowRecord = {
  transactionDate: new Date(),
  accountType: AccountType.Essentials,
  category: '',
  amount: 0,
  type: CashFlowType.Income,
};

export const columnWithoutConvert = [
  CashFlowHeader.Period,
  CashFlowHeader.Category,
  CashFlowHeader.SubCategory,
  CashFlowHeader.Note,
  CashFlowHeader.Amount,
  CashFlowHeader.Description,
];

export const CashFlowFields = {
  [CashFlowHeader.Period]: 'transactionDate',
  [CashFlowHeader.AccountType]: 'accountType',
  [CashFlowHeader.Category]: 'category',
  [CashFlowHeader.SubCategory]: 'subCategory',
  [CashFlowHeader.Note]: 'note',
  [CashFlowHeader.Amount]: 'amount',
  [CashFlowHeader.Type]: 'type',
  [CashFlowHeader.Description]: 'description',
};

export type CategoryAndSubs = {
  [x: string]: string[];
};
