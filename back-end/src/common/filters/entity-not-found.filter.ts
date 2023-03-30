import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { EntityNotFoundError } from 'typeorm';

import { AsyncRequestContext } from '../async-request-context/async-request-context.service';
import { commonErrorsConstant } from '../errors/constants/common-error.constant';
import { loggerConstant } from '../logger/logger.constant';
import { formatException } from '../errors/error.response';

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
