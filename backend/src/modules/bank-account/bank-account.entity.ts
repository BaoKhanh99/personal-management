import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Bank } from '../bank/bank.entity';

import { EntityConstant } from '@/common/constants/entity.constant';
import { BaseEntity } from '@/common/entities/base.entity';

@Entity('bank_account')
export class BankAccount extends BaseEntity {
  @ManyToOne(() => Bank, (bank) => bank.bankAccounts)
  @JoinColumn({ name: 'bank_id' })
  bank: Bank;

  @Column({
    type: 'varchar',
    name: 'account_number',
    length: EntityConstant.mediumLength,
  })
  accountNumber: string;

  @Column({
    type: 'varchar',
    name: 'qr_image',
    length: EntityConstant.mediumLength,
    nullable: true,
  })
  QRImage: string;

  @Column({
    type: 'number',
    nullable: false,
    name: 'bank_id',
  })
  bankId: number;
}
