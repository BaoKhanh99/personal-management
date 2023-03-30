import { Column, Entity, Index } from 'typeorm';

import { Base } from '../../common/entities/base.entity';

@Entity()
export class User extends Base {
  @Index('users_email')
  @Column('varchar', {
    nullable: false,
    unique: true,
  })
  email: string;

  @Column('varchar', {
    nullable: false,
  })
  password: string;

  @Column('varchar', {
    nullable: false,
  })
  name: string;
}
