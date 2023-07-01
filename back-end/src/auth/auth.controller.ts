import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

import { AllowUnauthorizedRequest } from '../common/decorators/allow-unauthorized-request.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @AllowUnauthorizedRequest()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): AuthDto {
    const user = req.user;

    return this.authService.login(user.id, user.email);
  }
}
