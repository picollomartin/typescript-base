import app from './app';
import Rollbar from 'rollbar';
import * as migrationsManager from './migrations';
import config from './config';
import logger from './app/logger';

const DEFAULT_PORT = 8080;
const port = config.common.api.port || DEFAULT_PORT;

Promise.resolve()
  .then(() => migrationsManager.check())
  .then(() => {
    const rollbar = new Rollbar({
      accessToken: config.common.rollbar.accessToken,
      enabled: !!config.common.rollbar.accessToken,
      environment: config.common.rollbar.environment || config.environment
    });
    app.use(rollbar.errorHandler());

    app.listen(port);

    logger.info(`Listening on port: ${port}`);
  })
  .catch(logger.error);

