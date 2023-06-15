import { Column, Entity, OneToMany } from 'typeorm';

import { ToDo } from '../to-dos/to-do.entity';
import { Base } from '../../common/entities/base.entity';

@Entity('users')
export class User extends Base {
  @OneToMany(() => ToDo, (toDo) => toDo.user)
  toDos: ToDo[];

  @Column('varchar', {
    name: 'email',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column('varchar', {
    name: 'password',
    nullable: false,
  })
  password: string;

  @Column('varchar', {
    name: 'name',
    nullable: false,
  })
  name: string;
}
