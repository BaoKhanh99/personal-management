import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CreateUserInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly _dataSource: DataSource) {
    super(User, _dataSource.manager);
  }

  async getUsers(id: string) {
    const query = this.createQueryBuilder().select();

    if (id) {
      return await query.where({ id }).getMany();
    }

    return await query.getMany();
  }

  async createUser(createUserInput: CreateUserInput) {
    const insert = await this.createQueryBuilder()
      .insert()
      .into(User)
      .values(createUserInput)
      .execute();

    return this.findUser(insert.generatedMaps[0].id);
  }

  async updateUser(id: string, updateUserInput: UpdateUserInput) {
    await this.createQueryBuilder()
      .update(User)
      .set(updateUserInput)
      .where('id= :id', { id })
      .execute();

    return this.findUser(id);
  }

  async deleteUser(id: string) {
    return await this.createQueryBuilder()
      .delete()
      .from(User)
      .where('id= :id', { id })
      .execute();
  }

  async findUser(id: string) {
    return await this.createQueryBuilder().select().where({ id }).getOne();
  }
}
