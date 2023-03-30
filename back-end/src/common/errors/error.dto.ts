import { Expose } from 'class-transformer';

import { Default } from '../../common/decorators/default.decorator';

export class ErrorDto {
  @Expose()
  readonly code: string;

  @Expose()
  @Default(null)
  message?: string;
}
