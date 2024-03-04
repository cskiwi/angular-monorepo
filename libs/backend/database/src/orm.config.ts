import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import {
  AppUser
} from './models';

const addMigrations = process.env['RUN_MIGRATIONS']?.trim() === 'true';

config();

export const ormConfig = {
  type: 'postgres',
  host: process.env['DB_IP'],
  port: process.env['DB_PORT'] ? parseInt(process.env['DB_PORT']) : 5432,
  username: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_DATABASE'],
  ssl: process.env['DB_SSL'] === 'true' ? { rejectUnauthorized: false } : false,
  migrationsTableName: 'typeorm_migrations',
  applicationName: 'angular-nestjs-vite',
  options: { trustServerCertificate: true },
  // below is a fix so that the migrations can run because they are typescript
  migrations: addMigrations
    ? ['libs/backend/database/src/migrations/*.ts']
    : undefined,
  entities: [ 
    AppUser //, Add the other entities here
],
  // logging: true,
  synchronize: false,
  migrationsRun: false,
} as DataSourceOptions;

const datasource = new DataSource(ormConfig);
datasource.initialize();
export default datasource;
