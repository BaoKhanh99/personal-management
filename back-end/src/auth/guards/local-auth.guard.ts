import {
  ExecutionContext,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { authErrorsConstant } from '../../config/errors/constants/auth-error.constant';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    if (status === HttpStatus.BAD_REQUEST && info?.message) {
      const error = authErrorsConstant.otherValid;
      error['message'] = info.message;
      throw new UnauthorizedException(error);
    }

    return super.handleRequest(err, user, info, context, status);
  }
}
