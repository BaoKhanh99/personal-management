import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { EntityNotFoundError } from 'typeorm';

import { commonErrorsConstant } from '../../config/errors/constants/common-error.constant';
import { formatException } from '../../config/errors/error.response';
import { AsyncRequestContext } from '../../config/async-request-context/async-request-context.service';
import { loggerConstant } from '../../config/logger/logger.constant';

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
  constructor(
    private readonly logger: Logger,
    private readonly asyncRequestContext: AsyncRequestContext,
  ) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const error = commonErrorsConstant.entityNotFound;

    this.logger.error(
      loggerConstant.entityNotFound,
      undefined,
      this.asyncRequestContext.getRequestIdStore(),
    );

    response.status(HttpStatus.NOT_FOUND).json(formatException(error));
  }
}
