import { getRepository } from 'typeorm';
import User from '../../../../models/entities/User';
import UsersView from '../views/user.view';
import UsersRepository from '../repositories/users.repository';

interface Request {
  id: string;
}

class GetUsersService {
  public async exec({ id }: Request): Promise<UsersView> {
    const repository = getRepository(User);
    
    const usersRespository = new UsersRepository(repository)

    const user = await usersRespository.getById({id});

    if (!user) {
      throw new Error('This login/password is incorrect');
    }

    const userView = new UsersView(user);

    return userView;
  }
}

export default GetUsersService;
