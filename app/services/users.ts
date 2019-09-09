import models from '../models';
import { IUserModel } from '../../types/models';

const User = models.users;

export class UserNotFoundError extends Error {
  public banana: Date;

  public constructor(id: string) {
    super(`User with id {${id}} not found`);
    this.banana = new Date();
  }
}


export const getUserByIdService = (id: string): Promise<IUserModel | void> =>
  User.findOne({ where: { id } })
    .then((user: IUserModel): IUserModel => {
      if (!user) {
        throw new UserNotFoundError(id);
      }
      return user;
    });
