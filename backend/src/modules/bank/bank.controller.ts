import { Controller, Get } from '@nestjs/common';

import { Bank } from './bank.entity';
import { BankService } from './bank.service';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  async getAll(): Promise<Bank[]> {
    return this.bankService.getAll();
  }
}
