import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UserDTO } from '../../types/dto';

// eslint-disable-next-line new-cap
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public findByName(username: string): Promise<User | undefined> {
    return this.findOne({ username });
  }

  public createAndSave(userdata: UserDTO): Promise<User> {
    const user = new User(userdata);
    return this.save(user);
  }
}
