import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export default {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    process.env.NODE_ENV === 'seed'
      ? 'src/models/**/*.entity.ts'
      : 'dist/models/**/*.entity.js',
  ],
  migrations: ['dist/database/migrations/*.js'],
  migrationsTableName: 'migrations',
  seeds: ['src/database/seeders/*.seed.ts'],
  factories: ['src/database/factories/*.factory.ts'],
} as DataSourceOptions & SeederOptions;
