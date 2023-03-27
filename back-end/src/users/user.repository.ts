import { Injectable } from '@nestjs/common';
import { DataSource, EntityNotFoundError, Repository } from 'typeorm';

import { UpdateUserInput } from './dtos/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly _dataSource: DataSource) {
    super(User, _dataSource.manager);
  }

  async getUsers(id: string): Promise<User[] | User> {
    const query = this.createQueryBuilder().select();

    if (id) {
      const user = await query.where({ id }).getOne();
      this.checkUser(user);

      return user;
    }

    return await query.getMany();
  }

  async updateUser(
    id: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    this.checkUser(await this.findOne({ where: { id: id } }));

    await this.createQueryBuilder()
      .update(User)
      .set(updateUserInput)
      .where('id= :id', { id })
      .execute();

    return this.findOne({ id });
  }

  async deleteUser(id: string) {
    this.checkUser(await this.findOne({ where: { id: id } }));

    return await this.createQueryBuilder()
      .delete()
      .from(User)
      .where('id= :id', { id })
      .execute();
  }

  async findOne(condition: object): Promise<User> {
    return await this._dataSource
      .getRepository(User)
      .findOne({ where: condition });
  }

  private checkUser(user: User) {
    if (!user) {
      throw new EntityNotFoundError(User.name, undefined);
    }
  }
}
