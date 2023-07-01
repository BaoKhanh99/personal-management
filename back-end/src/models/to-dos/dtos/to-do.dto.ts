import { Expose } from 'class-transformer';

export class ToDoDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  startDate: Date;

  @Expose()
  EndDate: Date;
}
