import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ToDoController } from './to-do.controller';
import { ToDo } from './to-do.entity';
import { ToDoRepository } from './to-do.repository';
import { ToDoService } from './to-do.service';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  providers: [ToDoService, ToDoRepository],
  controllers: [ToDoController],
})
export class ToDoModule {}
