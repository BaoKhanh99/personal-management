import { Controller, Get } from '@nestjs/common';

import { BankAccountService } from './bank-account.service';

@Controller('bank-accounts')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Get()
  async getAll() {
    return this.bankAccountService.getAll();
  }
}
