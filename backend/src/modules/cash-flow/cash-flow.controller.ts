import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CashFlowService } from './cash-flow.service';

import { ExcelImportService } from '@/providers/excel-import/excel-import.service';

@Controller('cash-flow')
export class CashFlowController {
  constructor(
    private readonly cashFlowService: CashFlowService,
    private readonly excelImportService: ExcelImportService,
  ) {}

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async import(@UploadedFile() rawFile: Express.Multer.File) {
    const file = await this.excelImportService.importCashFlow(rawFile);
    return this.cashFlowService.import(file);
  }
}
