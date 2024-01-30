import { Column, Entity, OneToMany } from 'typeorm';

import { SubCategory } from '../sub-category/sub-category.entity';

import { EntityConstant } from '@/common/constants/entity.constant';
import { BaseEntity } from '@/common/entities/base.entity';

@Entity('category')
export class Category extends BaseEntity {
  @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
  SubCategories: SubCategory[];

  @Column({
    type: 'varchar',
    name: 'category',
    length: EntityConstant.mediumLength,
  })
  category: string;
}
