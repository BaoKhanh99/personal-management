import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { v4 } from 'uuid';
import { Logger } from 'winston';

import { AsyncRequestContext } from '../../common/async-request-context/async-request-context.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: Logger,
    private readonly asyncRequestContext: AsyncRequestContext,
  ) {}

  use(req: any, res: any, next: (error?: any) => void) {
    const requestId = v4();

    this.logger.log(`BaseUrl: #${req.baseUrl}`, requestId);
    this.logger.log(`Body: ${JSON.stringify(req.body)}`, requestId);
    this.asyncRequestContext.set(requestId);

    next();
  }
}
