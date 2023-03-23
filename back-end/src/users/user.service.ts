import { Injectable } from '@nestjs/common';

import { CreateUserInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUserInput: CreateUserInput) {
    return await this.userRepository.createUser(createUserInput);
  }

  async getUsers(id: string) {
    return await this.userRepository.getUsers(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return await this.userRepository.updateUser(id, updateUserInput);
  }

  async delete(id: string) {
    return await this.userRepository.deleteUser(id);
  }
}
