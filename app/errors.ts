const internalError = (message: any, internalCode: string) => ({
  message,
  internalCode
});

export const DATABASE_ERROR = 'database_error';
export const databaseError = (message: any) =>
  internalError(message, exports.DATABASE_ERROR);

export const DEFAULT_ERROR = 'default_error';
export const defaultError = (message: any) =>
  internalError(message, exports.DEFAULT_ERROR);
