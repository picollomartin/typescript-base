// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./config/db');

const typeOrmConfig = {
  name: 'default',
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: ['./entity/**/*.ts'],
  migrations: ['./migration/migrations/*.ts'],
  subscribers: ['./subscriber/**/*.ts'],
  cli: {
    entitiesDir: './entity',
    subscribersDir: './subscriber'
  }
};

module.exports = { ...typeOrmConfig, ...config };
