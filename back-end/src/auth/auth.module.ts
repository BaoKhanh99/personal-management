import * as fs from 'fs';
import * as path from 'path';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { authConstant } from './auth.constant';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserModule } from '../models/users/user.module';
import { AppConfigModule } from '../config/app/config.module';
import { AppConfigService } from '../config/app/config.service';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => ({
        privateKey: fs.readFileSync(
          path.join(__dirname + appConfigService.getPrivateKey()),
        ),
        publicKey: fs.readFileSync(
          path.join(__dirname + appConfigService.getPublicKey()),
        ),
        signOptions: {
          expiresIn: authConstant.accessTokenExpiresIn,
          algorithm: 'RS256',
        },
        verifyOptions: {
          algorithms: ['RS256'],
        },
      }),
    }),
    PassportModule,
    AppConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
