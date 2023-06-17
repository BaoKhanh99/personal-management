import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

import { hash } from '../../common/utils/bcrypt.util';
import { User } from '../../models/users/user.entity';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(User);
    await repository.insert({
      email: process.env.ADMIN_EMAIL,
      password: await hash(process.env.ADMIN_PASSWORD),
      name: process.env.ADMIN_NAME,
    });
  }
}
