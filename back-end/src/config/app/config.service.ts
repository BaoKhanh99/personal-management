import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  getName(): string {
    return this.configService.get<string>('app.name');
  }

  getEnv(): string {
    return this.configService.get<string>('app.env');
  }

  getPort(): number {
    return +this.configService.get<string>('app.port');
  }
}
