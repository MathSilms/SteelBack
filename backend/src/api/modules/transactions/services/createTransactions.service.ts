import { getRepository } from 'typeorm';
import User from '../../../../models/entities/User';
import Business from '../../../../models/entities/Business';
import TransactionView from '../views/transactions.view';
import UsersRepository from '../../users/repositories/users.repository';
import BusinessRepository from '../../business/repositories/business.repository';
import TransactionsRepository from '../repositories/transactions.repository';
import Transaction from '../../../../models/entities/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Request {
  type: 'income' | 'outcome';
  total_weighting: number;
  user: string;
  business: string;
  balance: Balance;
}

class CreateTransactionsService {

  public async exec({ type, total_weighting, user, business, balance }: Request): Promise<TransactionView> {
    
    if( type === "outcome" && balance.total < total_weighting ) {
      throw new Error('You do not have enough balance')
   }

    const usersGetRepository = getRepository(User);
    const businessGetRepository = getRepository(Business);
    const transactionsGetRepository = getRepository(Transaction);

    const usersRepository = new UsersRepository(usersGetRepository);
    const businessRepository = new BusinessRepository(businessGetRepository)
    const transactionsRepository = new TransactionsRepository(transactionsGetRepository)

    const userExists = await usersRepository.getById({id: user});

    if (!userExists) {
      throw new Error('This id is incorrect');
    }

    const businessExists = await businessRepository.getById({id: business});

    if (!businessExists) {
      throw new Error('This id is incorrect');
    }

    if(!businessExists.is_cooperative){
      throw new Error('This is not cooperative');
    }
    
    const transaction = await transactionsRepository.create({
      type,
      total_weighting,
      user: userExists,
      business: businessExists,
    });
    console.log(transaction)
    const transactionsView = new TransactionView({transaction})

    return transactionsView;
  }
}

export default CreateTransactionsService;
