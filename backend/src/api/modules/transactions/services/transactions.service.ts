import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../../../../models/entities/User';
import Session from '../../../../models/entities/Session';
import SessionsView from '../views/transactions.view';
import UsersRepository from '@api/modules/users/repositories/users.repository';
import TransactionsRepository from '../repositories/transactions.repository';
import Transaction from '../../../../models/entities/Transaction';

interface Request {
  type: 'income' | 'outcome';
  total_weighting: number;
  user: string;
  business: string;
}

class SessionsService {

  public async exec({ type, total_weighting, user, business }: Request): Promise<SessionsView> {
    const transactionsGetRepository = getRepository(Transaction);
    
    const usersGetRepository = getRepository(User);

    const usersRepository = new UsersRepository(usersGetRepository)

    const transactionsRepository = new TransactionsRepository(transactionsGetRepository)

    const userExists = await usersRepository.getById({id: user});

    if (!userExists) {
      throw new Error('This login/password is incorrect');
    }


    
    const session = await transactionsRepository.create({
      user: userExists,
    });

    return sessionView;
  }
}

export default SessionsService;
