import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../../../../models/entities/User';
import Session from '../../../../models/entities/Session';
import SessionsView from '../views/sessions.view';
import UsersRepository from '@api/modules/users/repositories/users.repository';
import SessionsRepository from '../repositories/sessions.repository';

interface Request {
  login: string;
  password: string;
}

class SessionsService {
  private secret = process.env.JWT_SECRET as string;

  public async exec({ login, password }: Request): Promise<SessionsView> {
    const sessionsGetRepository = getRepository(Session);
    
    const usersGetRepository = getRepository(User);

    const usersRespository = new UsersRepository(usersGetRepository)

    const sessionsRepository = new SessionsRepository(sessionsGetRepository)


    const userExists = await usersRespository.getByLogin({login});

    if (!userExists) {
      throw new Error('This login/password is incorrect');
    }

    const passwordMatched = await compare(
      password as string,
      userExists.password_hash,
    );

    if (!passwordMatched) {
      throw new Error('This login/password is incorrect');
    }

    
    const session = await sessionsRepository.create({
      user: userExists,
    });

    const token = sign(
      {
        data: 'Attomic',
      },
      this.secret,
      {
        subject: userExists.id,
        expiresIn: '2d',
      },
    );
    const sessionView = new SessionsView({
      session,
      token,
    });
    return sessionView;
  }
}

export default SessionsService;
