import { Column, Entity } from 'typeorm';

import { Base } from '../../common/entities/base.entity';

@Entity('to-dos')
export class ToDo extends Base {
  @Column('varchar', {
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    nullable: false,
  })
  description: string;
}
