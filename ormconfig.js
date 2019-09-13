// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./config/db');

const typeOrmConfig = {
  name: 'default',
  type: 'postgres',
  logging: false,
  entities: ['./app/entities/**/*.ts'],
  migrations: ['./migration/*.ts'],
  subscribers: ['./subscriber/**/*.ts'],
  cli: {
    entitiesDir: './entity',
    migrationsDir: './migration',
    subscribersDir: './subscriber'
  }
};

module.exports = { ...typeOrmConfig, ...config };
