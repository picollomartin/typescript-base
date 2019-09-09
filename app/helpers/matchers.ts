import { UserNotFoundError } from '../services/users';
import { InternalServerError, NotFoundError } from '../errors';

interface IClass<T> {
  new(...args: unknown[]): T
}

interface IErrorConsumer {
  (e: Error): never
}

interface IClassMatcher {
  <T> (clazz: IClass<T>): IActionFinisher<T>
}

interface IActionFinisher<T> {
  throw: IThrower<T>
  exec: IExecuter<T>
}

interface IExecuter<T>{
  (fn: (x: T)=> unknown): IMatcherBuilder
}

interface IThrower<T> {
  (fn: ((x: T)=> Error)): IMatcherBuilder,
}

interface IMatcherBuilder {
  on: IClassMatcher
  default: IErrorConsumer
}

type Matcheable = (e: unknown)=> IMatcherBuilder;

export const match: Matcheable = (e: unknown) => ({
  on: <T>(clazz: IClass<T>): IActionFinisher<T> => ({
    throw: (fn: ((x: T)=> Error)): IMatcherBuilder => {
      if (e instanceof clazz) {
        throw fn(e);
      }
      return match(e);
    },
    exec: (fn: (x: T)=> unknown): IMatcherBuilder => {
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
