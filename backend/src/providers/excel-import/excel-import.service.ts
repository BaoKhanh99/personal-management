import { Inject, Injectable } from '@nestjs/common';
import { Workbook } from 'exceljs';

import { EXCEL_JS } from '@/common/constants/app.constant';

@Injectable()
export class ExcelImportService {
  constructor(
    @Inject(EXCEL_JS)
    private readonly workbook: Workbook,
  ) {}

  async importCashFlow(file: Express.Multer.File) {
    const { worksheets } = await this.workbook.xlsx.load(file.buffer);
    worksheets[0].eachRow((row, index) => {
      console.log(row.values[1], index);
    });
  }
}
