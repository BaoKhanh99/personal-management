import { Injectable } from '@nestjs/common';

import { Bank } from './bank.entity';
import { BankRepository } from './bank.repository';

@Injectable()
export class BankService {
  constructor(private readonly bankRepo: BankRepository) {}

  async getAll(): Promise<Bank[]> {
    return this.bankRepo.find();
  }
}
