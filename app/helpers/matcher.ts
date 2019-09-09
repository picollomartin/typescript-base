import { UserNotFoundError } from '../services/users';
import { InternalServerError, NotFoundError } from '../errors';

type Class<T> = ({ new(...args: unknown[]): T });
type Thrower<T> = ({ throw: (fn: ((x: T)=> Error))=> Matcher, exec: (fn: (x: T)=> unknown)=> Matcher });
type Matcheable = (e: unknown)=> Matcher;
type Matcher = ({
  on: <T> (clazz: Class<T>)=> Thrower<T>
  default: (e: Error)=> never
});

export const match: Matcheable = (e: unknown) => ({
  on: <T>(clazz: Class<T>): Thrower<T> => ({
    throw: (fn: ((x: T)=> Error)): Matcher => {
      if (e instanceof clazz) {
        throw fn(e);
      }
      return match(e);
    },
    exec: (fn: (x: T)=> unknown): Matcher => {
      if (e instanceof clazz) {
        fn(e);
      }
      return match(e);
    }
  }),
  default: (err: Error): never => {
    throw err;
  }
});
