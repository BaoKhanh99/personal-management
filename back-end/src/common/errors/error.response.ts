import { plainToInstance } from 'class-transformer';

import { ErrorDto } from './error.dto';
import messages from './messages';

export const formatException = (errorRes: ErrorDto): ErrorDto => {
  errorRes.message = errorRes.message
    ? errorRes.message
    : messages[errorRes.code];

  return plainToInstance(ErrorDto, errorRes);
};
