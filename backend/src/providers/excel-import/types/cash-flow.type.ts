import { AccountType, CashFlowType } from '@/common/entities/entity.enum';

export type CashFlowRecord = {
  period: Date;
  accountType: AccountType;
  category: string;
  subCategory: string;
  note: string;
  amount: number;
  type: CashFlowType;
  description: string;
};

export const CashFlowExcelType = ['Exp.', 'Income'];
