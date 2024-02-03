import { Module } from '@nestjs/common';
import { Workbook } from 'exceljs';

import { EXCEL_JS } from '@/common/constants/app.constant';

@Module({
  providers: [
    {
      provide: EXCEL_JS,
      useFactory: () => {
        return new Workbook();
      },
    },
  ],
  exports: [EXCEL_JS],
})
export class ExcelImportModule {}
