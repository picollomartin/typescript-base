import Rollbar from 'rollbar';
import app from './app';
import migrationsCheck from './migrations';
import config from './config';
import logger from './app/logger';

const port = config.common.api.port || 8080;

export default Promise.resolve()
  .then(() => migrationsCheck())
  .then(() => {
    const rollbar = new Rollbar({
      accessToken: config.common.rollbar.accessToken,
      enabled: !!config.common.rollbar.accessToken,
      environment: config.common.rollbar.environment || config.environment
    });
    app.use(rollbar.errorHandler());

    app.listen(port);

    logger.info(`Listening on port: ${port}`);
    return app;
  })
  .catch(logger.error);
