import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BankAccount } from '../bank-account/bank.account.entity';
import { User } from '../user/user.entity';

import { EntityConstant } from '@/common/constants/entity.constant';
import { BaseEntity } from '@/common/entities/base.entity';
import { BankType } from '@/common/entities/entity.enum';

@Entity('bank')
export class Bank extends BaseEntity {
  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.bank)
  bankAccounts: BankAccount[];

  @ManyToOne(() => User, (user) => user.banks)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'varchar',
    name: 'name',
    length: EntityConstant.mediumLength,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'logo',
    length: EntityConstant.mediumLength,
    nullable: true,
  })
  logo: string;

  @Column({
    type: 'enum',
    name: 'type',
    enum: BankType,
  })
  type: BankType;

  @Column({
    type: 'number',
    nullable: false,
    name: 'user_id',
  })
  userId: number;
}
