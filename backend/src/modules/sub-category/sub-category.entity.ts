import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { CashFlow } from '../cash-flow/cash-flow.entity';
import { Category } from '../category/category.entity';

import { EntityConstant } from '@/common/constants/entity.constant';
import { BaseEntity } from '@/common/entities/base.entity';

@Entity('sub_category')
export class SubCategory extends BaseEntity {
  @OneToMany(() => CashFlow, (cashFlow) => cashFlow.subCategory)
  transactions: CashFlow[];

  @ManyToOne(() => Category, (category) => category.SubCategories)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({
    type: 'varchar',
    name: 'sub_category',
    length: EntityConstant.mediumLength,
  })
  subCategory: string;

  @Column({
    type: 'number',
    nullable: false,
    name: 'category_id',
  })
  categoryId: number;
}
