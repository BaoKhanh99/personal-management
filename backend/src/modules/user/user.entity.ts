import { Column, Entity, OneToMany } from 'typeorm';

import { Bank } from '../bank/bank.entity';

import { EntityConstant } from '@/common/constants/entity.constant';
import { BaseEntity } from '@/common/entities/base.entity';

@Entity('user')
export class User extends BaseEntity {
  @OneToMany(() => Bank, (bank) => bank.user)
  banks: Bank[];

  @Column({
    type: 'varchar',
    name: 'name',
    length: EntityConstant.mediumLength,
    nullable: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'email',
    length: EntityConstant.mediumLength,
    nullable: true,
  })
  email: string;
}
