import * as errors from '../errors';
import logger from '../logger';

const DEFAULT_STATUS_CODE = 500;

const statusCodes: any = {
  [errors.DATABASE_ERROR]: 503,
  [errors.DEFAULT_ERROR]: 500
};

export default (error: any, req: any, res: any, next: any) => {
  if (error.internalCode) {
    res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  } else {
    // Unrecognized error, notifying it to rollbar.
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  logger.error(error);
  return res.send(error);
};
