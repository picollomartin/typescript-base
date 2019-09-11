import { EntityRepository, Repository } from 'typeorm';
import { User, Userdata } from '../entities/User';

// eslint-disable-next-line new-cap
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public findByName(firstName: string, lastName: string): Promise<User | undefined> {
    return this.findOne({ firstName, lastName });
  }

  public findAll(): Promise<User[]> {
    return this.find();
  }

  public createAndSave(userdata: Userdata): Promise<User> {
    const user = new User(userdata);
    return this.save(user);
  }
}
