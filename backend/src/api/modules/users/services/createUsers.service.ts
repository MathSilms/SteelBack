import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../../../models/entities/User';
import UsersView from '../views/user.view';
import UsersRepository from '../repositories/users.repository';

interface Request {
  name: string;
  login: string;
  email: string;
  cep: string;
  cpf: string;
  password: string;
}

class UsersService {
  public async exec({ name, login, email, cep, cpf, password }: Request): Promise<UsersView> {
    console.log({ name, login, email, cep, cpf, password })
    const repository = getRepository(User);

    console.log("aqui")

    const usersRepository = new UsersRepository(repository)

    const userExists = await usersRepository.getByLogin({login});

    if (userExists) {
      throw new Error('This login is already assigned a user');
    }

    const password_hash = await hash(password, 8);

    const user = await usersRepository.create({
      name,
      login,
      email,
      cep,
      cpf,
      password_hash,
    })

    const userView = new UsersView(user);

    return userView;
  }
}

export default UsersService;
