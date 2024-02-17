import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CashFlowController } from './cash-flow.controller';
import { CashFlow } from './cash-flow.entity';
import { CashFlowRepository } from './cash-flow.repository';
import { CashFlowService } from './cash-flow.service';

import { ExcelImportModule } from '@/providers/excel-import/excel-import.module';
import { ExcelImportService } from '@/providers/excel-import/excel-import.service';

@Module({
  imports: [TypeOrmModule.forFeature([CashFlow]), ExcelImportModule],
  controllers: [CashFlowController],
  providers: [CashFlowService, ExcelImportService, CashFlowRepository],
})
export class CashFlowModule {}
