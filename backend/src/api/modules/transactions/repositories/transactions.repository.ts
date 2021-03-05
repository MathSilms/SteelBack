import {  Repository } from 'typeorm';
import Transaction from '../../../../models/entities/Transaction';
import User  from '../../../../models/entities/User';
import Business from '../../../../models/entities/Business';

interface GetUserRequest {
  id: string
}

interface Request {
  type: "income" | "outcome";
  total_weighting: number;
  user: User;
  business: Business;
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactionsRepository: Repository<Transaction>
  constructor(repository: Repository<Transaction> ){
    this.transactionsRepository = repository
  }
  public async create({ type, total_weighting, user, business }: Request): Promise<Transaction> {
    
    const transaction = this.transactionsRepository.create({
      type,
      total_weighting,
      user,
      business,
    });
  
    await this.transactionsRepository.save(transaction);

    return transaction
  }

  public async getBalance(): Promise<Balance> {
    const transactions = await this.transactionsRepository.find();

    const { income, outcome } = transactions.reduce((accumulator: Balance, transaction: Transaction) => {
      switch (transaction.type) {
        case 'income':
          accumulator.income += Number(transaction.total_weighting);
          break;
        case 'outcome':
          accumulator.outcome += Number(transaction.total_weighting);
          break;
        default:
          break;
      }
      return accumulator
    },{
      income: 0,
      outcome: 0,
      total: 0,
    });
    const total = income - outcome;
    return{ income, outcome, total};
  }

  public async getByUserId({ id }: GetUserRequest): Promise<Transaction[] | undefined> {

    const business = await this.transactionsRepository.find({
        where:{
          user_id: id,
        }
    });
    
    return business;
  }

  public async getByBusinessId({ id }: GetUserRequest): Promise<Transaction[] | undefined> {
    const business = await this.transactionsRepository.find({
        where: {
          business: {id},
        },
    });

    return business;
  }
}

export default TransactionsRepository;

