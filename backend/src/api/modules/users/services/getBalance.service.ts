import { getRepository } from 'typeorm';
import TransactionsRepository from '../../transactions/repositories/transactions.repository';
import Transaction from '../../../../models/entities/Transaction';
import TransactionsView from '../views/balance.view';

class GetBalanceService {
  public async exec(): Promise<TransactionsView> {
    const repository = getRepository(Transaction);

    const transactionsRepository = new TransactionsRepository(repository)

    const transactions = await transactionsRepository.getBalance();

    const transactionsView = new TransactionsView(transactions) 

    return transactionsView;
  }
}

export default GetBalanceService;