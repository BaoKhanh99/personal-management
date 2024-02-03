import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { SubCategory } from '../sub-category/sub-category.entity';

import { EntityConstant } from '@/common/constants/entity.constant';
import { BaseEntity } from '@/common/entities/base.entity';
import { AccountType, CashFlowType } from '@/common/entities/entity.enum';

@Entity('cash_flow')
export class CashFlow extends BaseEntity {
  @ManyToOne(() => SubCategory, (subCategory) => subCategory.transactions)
  @JoinColumn({ name: 'sub_category_id' })
  subCategory: SubCategory;

  @Column({
    type: 'varchar',
    name: 'note',
    length: EntityConstant.mediumLength,
    nullable: true,
  })
  note: string;

  @Column({
    type: 'varchar',
    name: 'description',
    length: EntityConstant.maxLength,
    nullable: true,
  })
  description: string;

  @Column({
    type: 'bigint',
    name: 'amount',
    unsigned: true,
  })
  amount: number;

  @Column({
    type: 'enum',
    enum: CashFlowType,
    name: 'type',
  })
  type: CashFlowType;

  @Column({
    type: 'enum',
    enum: AccountType,
    name: 'account_type',
  })
  accountType: AccountType;

  @Column({
    type: 'date',
    name: 'transaction_Date',
    nullable: true,
  })
  transactionDate: Date;

  @Column({
    type: 'number',
    nullable: false,
    name: 'sub_category_id',
  })
  subCategoryId: number;
}
