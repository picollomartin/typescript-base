import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/User';
import { statusCodes } from './commons';
import { User } from '../entities/User';
import { notFound } from '../errors';

const userRepository: () => UserRepository = () => getCustomRepository(UserRepository);

export const getUsers = (_: Request, res: Response, next: NextFunction): Promise<Response | void> =>
  userRepository()
    .find()
    .then(users => res.send(users))
    .catch(next);

export const createUser = (req: Request, res: Response, next: NextFunction): Promise<Response | void> =>
  userRepository()
    .createAndSave({ username: req.body.username, somethingElse: '' })
    .then(() => res.status(statusCodes.created).end())
    .catch(next);

export const getUserById = (req: Request, res: Response, next: NextFunction): Promise<Response | void> =>
  userRepository()
    .findOne({ where: { id: req.params.id } })
    .then((user: User) => {
      if (!user) {
        throw notFound('User not found');
      }
      return res.send(user);
    })
    .catch(next);
