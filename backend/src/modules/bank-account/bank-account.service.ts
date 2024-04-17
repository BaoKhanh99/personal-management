import { Injectable } from '@nestjs/common';

import { BankAccountRepository } from './bank-account.repository';

@Injectable()
export class BankAccountService {
  constructor(private readonly bankAccountRepo: BankAccountRepository) {}

  async getAll() {
    return this.bankAccountRepo.find({
      relations: {
        bank: true,
      },
    });
  }
}
