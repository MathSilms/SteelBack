import {  Repository } from 'typeorm';
import User from '../../../../models/entities/User';

interface Request {
  login: string
}

interface GetRequest {
  id: string
}

interface CreateRequest extends Request {
  name: string;
  email: string;
  cep: string;
  cpf: string;
  password_hash: string;
}

class UsersRepository {
  private usersRepository: Repository<User>
  constructor(repository: Repository<User>){
    this.usersRepository = repository
  }
  public async create({name, login, email, cep, cpf, password_hash}: CreateRequest): Promise<User> {
    const user = this.usersRepository.create({
        name,
        login,
        email,
        cep,
        cpf,
        password_hash,
    });
    console.log(user)
    await this.usersRepository.save(user);

    return user
  }

  public async getByLogin({ login }: Request): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({
        where: {
          login,
        },
    });

    return user;
  }

  public async getById({id}: GetRequest): Promise<User | undefined> {
    const user = await this.usersRepository.findOne(id);

    return user;
  }
}

export default UsersRepository;

