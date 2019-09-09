
export enum ErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  BAD_FORMAT = 'BAD_FORMAT',
  DATABASE_ERROR = 'DATABASE_ERROR',
  DEFAULT_ERROR = 'DEFAULT_ERROR'
}


export abstract class HTTPError extends Error {
  public readonly code: ErrorCode;

  protected constructor(msg: string, code: ErrorCode) {
    super(msg);
    this.code = code;
  }
}

export class DatabaseError extends HTTPError {
  public constructor(msg: string) {
    super(msg, ErrorCode.DATABASE_ERROR);
  }
}

export class InternalServerError extends HTTPError {
  public constructor(msg: string) {
    super(msg, ErrorCode.DEFAULT_ERROR);
  }
}

export class NotFoundError extends HTTPError {
  public constructor(resource: string) {
    super(`${resource} not found`, ErrorCode.NOT_FOUND);
  }
}
