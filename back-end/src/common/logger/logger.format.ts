import { blue, green, red } from 'cli-color';
import { hostname } from 'os';
import { PlatformTools } from 'typeorm/platform/PlatformTools';
import { format } from 'winston';

import { loggerConstant } from './logger.constant';

export const loggerFormat = format.printf(
  ({ level, message, context, timestamp }): string => {
    const hostName = `[${hostname()}]`;
    timestamp = `[${timestamp}]`;

    if (message.startsWith(loggerConstant.queryPrefix)) {
      level = loggerConstant.verboseLevel;
      message = PlatformTools.highlightSql(message);
    }

    switch (level) {
      case loggerConstant.infoLevel:
        level = green(`[${level.toUpperCase()}]`);
        context = green(`[${context}]`);

        break;
      case loggerConstant.errorLevel:
        level = red(`[${level.toUpperCase()}]`);
        context = red(`[${context}]`);

        break;
      case loggerConstant.verboseLevel:
        level = blue(`[${loggerConstant.queryPrefix.toUpperCase()}]`);
        context = blue(`[${context}]`);
    }

    return `${level}\t${hostName}\t${timestamp}\t${context}\t${message}`;
  },
);
