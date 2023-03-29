import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { User } from '../users/user.entity';
import { Base } from '../../common/entities/base.entity';

@Entity('to_dos')
export class ToDo extends Base {
  @ManyToOne(() => User, (user) => user.ToDos)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('varchar', {
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    name: 'description',
    nullable: false,
  })
  description: string;

  @Column('boolean', {
    name: 'is_done',
    nullable: false,
    default: false,
  })
  isDone: boolean;

  @Column('date', {
    name: 'start_date',
    nullable: false,
  })
  startDate: Date;

  @Column('date', {
    name: 'end_date',
    nullable: false,
  })
  endDate: Date;

  @Column('uuid', { name: 'user_id', nullable: false })
  userId: string;
}
