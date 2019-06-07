import config from '../config';

export default {
  development: {
    username: config.common.database.common.database.username,
    password: config.common.database.password,
    database: config.common.database.name,
    host: config.common.database.host,
    dialect: 'postgres',
    logging: true
  },
  testing: {
    username: config.common.database.username,
    password: config.common.database.password,
    database: config.common.database.name,
    host: config.common.database.host,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: config.common.database.username,
    password: config.common.database.password,
    database: config.common.database.name,
    host: config.common.database.host,
    dialect: 'postgres',
    logging: false
  }
} as any;
