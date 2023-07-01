import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Base } from '../../common/entities/base.entity';
import { User } from '../users/user.entity';

@Entity('to_dos')
export class ToDo extends Base {
  @ManyToOne(() => User, (user) => user.toDos)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('varchar', {
    name: 'title',
    nullable: false,
  })
  title: string;

  @Column('varchar', {
    name: 'description',
    nullable: false,
  })
  description: string;

  @Column('timestamp', {
    nullable: false,
    name: 'start_date',
  })
  startDate: Date;

  @Column('timestamp', {
    nullable: true,
    name: 'end_date',
  })
  EndDate: Date;

  @Column('string', {
    nullable: false,
    name: 'user_id',
  })
  userId: string;
}
