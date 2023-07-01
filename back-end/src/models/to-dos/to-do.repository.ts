import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ToDo } from './to-do.entity';

@Injectable()
export class ToDoRepository extends Repository<ToDo> {
  constructor(private readonly _dataSource: DataSource) {
    super(ToDo, _dataSource.manager);
  }
}
