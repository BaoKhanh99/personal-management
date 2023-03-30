import { Injectable } from '@nestjs/common';

import { CreateUserInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { hash } from '../../common/utils/bcrypt.util';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserInput: CreateUserInput) {
    createUserInput.password = await hash(createUserInput.password);

    return await this.userRepository.save(createUserInput);
  }

  async getUsers(id: string) {
    return await this.userRepository.getUsers(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    updateUserInput.password = await hash(updateUserInput.password);

    return await this.userRepository.updateUser(id, updateUserInput);
  }

  async delete(id: string) {
    return await this.userRepository.deleteUser(id);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ email });
  }
}
