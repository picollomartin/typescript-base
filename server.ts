import app from './app';
import Rollbar from 'rollbar';
import config from './config';
import logger from './app/logger';
import { createConnection } from 'typeorm';

const defaultPort = 8080;
const port = config.common.api.port || defaultPort;

Promise.resolve()
  .then(() => {
    const rollbar = new Rollbar({
      accessToken: config.common.rollbar.accessToken,
      enabled: !!config.common.rollbar.accessToken,
      environment: config.common.rollbar.environment || config.environment
    });
    app.use(rollbar.errorHandler());
  })
  .then(() => createConnection())
  .then(connection => connection.runMigrations())
  .then(() => {
    app.listen(port);

    logger.info(`Listening on port: ${port}`);
  })
  .catch(e => logger.error(e));
