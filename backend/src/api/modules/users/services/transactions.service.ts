import { getRepository } from 'typeorm';
import TransactionsRepository from '../repositories/transactions.repository';
import Transaction from '../../../../models/entities/Transaction';
import TransactionsView from '../views/transaction.view';

class TransactionsService {
  public async exec(): Promise<TransactionsView> {
    const repository = getRepository(Transaction);

    const transactionsRepository = new TransactionsRepository(repository)

    const transactions = await transactionsRepository.getBalance();

    const transactionsView = new TransactionsView(transactions) 

    return transactionsView;
  }
}

export default TransactionsService;