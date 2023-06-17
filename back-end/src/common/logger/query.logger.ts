import { Inject, Logger } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AdvancedConsoleLogger, LoggerOptions } from 'typeorm';

import { loggerConstant } from './logger.constant';

import { AsyncRequestContext } from '../../common/async-request-context/async-request-context.service';

export class QueryLogger extends AdvancedConsoleLogger {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: Logger,
    private readonly asyncRequestContext: AsyncRequestContext,
  ) {
    super(loggerConstant.queryLogLevels as LoggerOptions);
  }

  logQuery(query: string, parameters?: any[]) {
    const stringifyParams =
      parameters && parameters.length
        ? loggerConstant.queryParameterPrefix + JSON.stringify(parameters)
        : '';

    const sql = `${loggerConstant.queryPrefix}: ${query} ${stringifyParams}`;

    this.logger.log(
      sql,
      this.asyncRequestContext.getRequestIdStore() ||
        loggerConstant.typeOrmFirstQuery,
    );
  }
}
