import { Request, Response, NextFunction } from 'express';
import models from '../models';
import { statusCodes } from './commons';
import { NotFoundError } from '../errors';
import { UserModel } from '../../types/models';
import Bluebird = require('bluebird');

const User = models.users;

export const getUsers = (_: Request, res: Response, next: NextFunction): Promise<UserModel[]> =>
  User.findAll()
    .then((users: UserModel[]) => res.send(users))
    .catch(next);

export const createUser = (req: Request, res: Response, next: NextFunction): Bluebird<void> =>
  User.create({ username: req.body.username })
    .then(() => res.status(statusCodes.created).end())
    .catch(next);

export const getUserById = (req: Request, res: Response, next: NextFunction): Promise<UserModel> =>
  User.findOne({ where: { id: req.params.id } })
    .then((user: UserModel) => {
      if (!user) {
        throw new NotFoundError('User not found');
      }
      return res.send(user);
    })
    .catch(next);
