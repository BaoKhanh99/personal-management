import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateUserInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

import { Serializer } from '../../common/decorators/serializer.decorator';

@Controller('users')
@Serializer(UserDto)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(@Query('id') id: string): Promise<User[] | User> {
    return await this.userService.getUsers(id);
  }

  @Post()
  async create(@Body() createUserInput: CreateUserInput): Promise<User> {
    return await this.userService.create(createUserInput);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return await this.userService.update(id, updateUserInput);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
