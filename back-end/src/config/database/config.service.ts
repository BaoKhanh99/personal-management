import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  getHost(): string {
    return this.configService.get<string>('database.host');
  }

  getName(): string {
    return this.configService.get<string>('database.name');
  }

  getPort(): number {
    return +this.configService.get<string>('database.port');
  }

  getUsername(): string {
    return this.configService.get<string>('database.username');
  }

  getPassword(): string {
    return this.configService.get<string>('database.password');
  }
}
