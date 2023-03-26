import { Expose } from 'class-transformer';

export class ErrorDto {
  @Expose()
  readonly code: string;

  @Expose()
  message?: string;
}
