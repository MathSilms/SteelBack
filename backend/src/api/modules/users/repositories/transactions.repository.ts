import {  Repository } from 'typeorm';
import Transaction from '../../../../models/entities/Transaction';

interface Balance {
    income: number;
    outcome: number;
    total: number;
}

class TransactionsRepository {
  private transactionsRepository: Repository<Transaction>
  constructor(repository: Repository<Transaction>){
    this.transactionsRepository = repository
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
}

export default TransactionsRepository;