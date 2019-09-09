import { NextFunction, Request, Response } from 'express';
import models from '../models';
import { statusCodes } from './commons';
import { IUserModel } from '../../types/models';
import { getUserByIdService, UserNotFoundError } from '../services/users';
import { InternalServerError, NotFoundError } from '../errors';
import { match } from '../helpers/matchers';
const User = models.users;

const send = (res: Response) => (value: unknown): Response => res.send(value);

export const getUsers = (_: Request, res: Response, next: NextFunction): Promise<Response | void> =>
  User.findAll()
    .then((users: IUserModel[]) => res.send(users))
    .catch(next);

export const createUser = (req: Request, res: Response, next: NextFunction): Promise<void> =>
  User.create({ username: req.body.username })
    .then(() => res.status(statusCodes.created).end())
    .catch(next);

export const getUserById = (req: Request, res: Response, next: NextFunction): Promise<Response | void> =>
  getUserByIdService(req.params.id)
    .then(send(res))
    .catch(e => match(e)
      .on(UserNotFoundError).throw(x => new NotFoundError(x.banana.toISOString()))
      .on(Error).throw(x => new InternalServerError(x.message))
      .default(new InternalServerError('Oops ha habido un error')))
    .catch(next);
