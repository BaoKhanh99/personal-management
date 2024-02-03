import { Module } from '@nestjs/common';

import { CashFlowController } from './cash-flow.controller';
import { CashFlowService } from './cash-flow.service';

import { ExcelImportModule } from '@/providers/excel-import/excel-import.module';
import { ExcelImportService } from '@/providers/excel-import/excel-import.service';

@Module({
  imports: [ExcelImportModule],
  controllers: [CashFlowController],
  providers: [CashFlowService, ExcelImportService],
})
export class CashFlowModule {}
