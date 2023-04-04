import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  port: process.env.APP_PORT,
  tz: process.env.TZ,
  public_key: process.env.PUBLIC_KEY,
  private_key: process.env.PRIVATE_KEY,
}));
