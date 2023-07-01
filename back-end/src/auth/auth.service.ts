import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { authConstant } from './auth.constant';

import { compare } from '../common/utils/bcrypt.util';
import { UserService } from '../models/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  login(id: string, email: string) {
    return this.createToken(id, email);
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user && (await compare(password, user.password))) {
      return user;
    }

    return null;
  }

  private createToken(id: string, email: string) {
    const payload = { id, email };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: authConstant.refreshTokenExpiresIn,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}
