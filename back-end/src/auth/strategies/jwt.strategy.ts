import { readFileSync } from 'fs';
import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { join } from 'path';

import { AppConfigService } from '../../config/app/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('CONFIG_SERVICE') configService: AppConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: readFileSync(
        join(__dirname + `../${configService.getPublicKey()}`),
      ),
    });
  }

  validate(payload: any) {
    return { id: payload.id, email: payload.email };
  }
}
