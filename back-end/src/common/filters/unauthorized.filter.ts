import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

import { AsyncRequestContext } from '../async-request-context/async-request-context.service';
import { loggerConstant } from '../logger/logger.constant';
import { formatException } from '../errors/error.response';

@Catch(UnauthorizedException)
export class UnauthorizedFilter implements ExceptionFilter {
  constructor(
    private readonly logger: Logger,
    private readonly asyncRequestContext: AsyncRequestContext,
  ) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    this.logger.error(
      loggerConstant.unauthorized,
      exception,
      this.asyncRequestContext.getRequestIdStore(),
    );

    response
      .status(exception.getStatus())
      .json(formatException(exception.response));
  }
}
