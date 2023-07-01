import { Injectable } from '@nestjs/common';

import { CreateToDoDto, UpdateToDoDto } from './dtos';
import { ToDo } from './to-do.entity';
import { ToDoRepository } from './to-do.repository';

@Injectable()
export class ToDoService {
  constructor(private readonly repo: ToDoRepository) {}

  async findAll(userId: string): Promise<ToDo[]> {
    return await this.repo.find({ where: { userId } });
  }

  async findOne(id: string): Promise<ToDo> {
    return await this.repo.findOneBy({ id });
  }

  async create(input: CreateToDoDto, userId: string): Promise<void> {
    await this.repo.insert({
      ...input,
      userId,
    });
  }

  async update(id: string, input: UpdateToDoDto): Promise<void> {
    await this.repo.update(id, {
      ...input,
    });
  }

  async delete(id: string): Promise<void> {
    await this.repo.softDelete(id);
  }
}
