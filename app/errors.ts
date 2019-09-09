
export enum ErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  BAD_FORMAT = 'BAD_FORMAT',
  DATABASE_ERROR = 'DATABASE_ERROR',
  DEFAULT_ERROR = 'DEFAULT_ERROR'
}


export abstract class InternalError extends Error {
  public readonly code: ErrorCode;

  protected constructor(msg: string, code: ErrorCode) {
    super(msg);
    this.code = code;
  }
}

export class DatabaseError extends InternalError {
  public constructor(msg: string) {
    super(msg, ErrorCode.DATABASE_ERROR);
  }
}

export class NotFoundError extends InternalError {
  public constructor(msg: string) {
    super(msg, ErrorCode.NOT_FOUND);
  }
}
