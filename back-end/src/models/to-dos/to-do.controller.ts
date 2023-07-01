import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateToDoDto, ToDoDto, UpdateToDoDto } from './dtos';
import { ToDoService } from './to-do.service';

import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Serializer } from '../../common/decorators/serializer.decorator';

import { User } from '../users/user.entity';

@Controller('to-dos')
@Serializer(ToDoDto)
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Get()
  async showAll(@CurrentUser() { id }: User): Promise<ToDoDto[]> {
    return this.toDoService.findAll(id);
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<ToDoDto> {
    return this.toDoService.findOne(id);
  }

  @Post()
  async create(
    @CurrentUser() { id }: User,
    @Body() input: CreateToDoDto,
  ): Promise<void> {
    return this.toDoService.create(input, id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() input: UpdateToDoDto,
  ): Promise<void> {
    return this.toDoService.update(id, input);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.toDoService.delete(id);
  }
}
