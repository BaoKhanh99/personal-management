import { readFileSync } from 'fs';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { join } from 'path';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: readFileSync(
        join(__dirname + `../${process.env.PUBLIC_KEY}`),
      ),
    });
  }

  validate(payload: any) {
    return { id: payload.id, email: payload.email };
  }
}
