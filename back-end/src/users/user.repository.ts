import { Injectable } from '@nestjs/common';
import { DataSource, EntityNotFoundError, Repository } from 'typeorm';

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
      const user = await query.where({ id }).getOne();
      this.checkUser(user);

      return user;
    }

    return await query.getMany();
  }

  async updateUser(id: string, updateUserInput: UpdateUserInput) {
    this.checkUser(await this.findOne({ where: { id: id } }));

    await this.createQueryBuilder()
      .update(User)
      .set(updateUserInput)
      .where('id= :id', { id })
      .execute();

    return this.findUser(id);
  }

  async deleteUser(id: string) {
    this.checkUser(await this.findOne({ where: { id: id } }));

    return await this.createQueryBuilder()
      .delete()
      .from(User)
      .where('id= :id', { id })
      .execute();
  }

  async findUser(id: string) {
    return await this.createQueryBuilder().select().where({ id }).getOne();
  }

  private checkUser(user: User) {
    if (!user) {
      throw new EntityNotFoundError(User.name, undefined);
    }
  }
}
