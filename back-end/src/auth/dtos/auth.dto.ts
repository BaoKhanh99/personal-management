import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  accessToken: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
