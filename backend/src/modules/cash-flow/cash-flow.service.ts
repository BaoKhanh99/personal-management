import { Injectable } from '@nestjs/common';

@Injectable()
export class CashFlowService {
  async import(file: any) {
    console.log(file);
  }
}
