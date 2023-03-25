import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { EntityNotFoundError } from 'typeorm';

import { commonErrorsConstant } from '../../config/errors/constants/common-error.constant';
import { formatException } from '../../config/errors/error.response';

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const error = commonErrorsConstant.entityNotFound;

    response.status(HttpStatus.NOT_FOUND).json(formatException(error));
  }
}
