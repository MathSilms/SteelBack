import { getRepository } from 'typeorm';
import TransactionsRepository from '../../transactions/repositories/transactions.repository';
import Transaction from '../../../../models/entities/Transaction';
import TransactionView from '@api/modules/transactions/views/transactions.view';


interface Request {
  id: string;
}

class GetTransactionService {
  public async exec({id}: Request): Promise<Transaction[] | undefined> {
    
    const repository = getRepository(Transaction);

    const transactionsRepository = new TransactionsRepository(repository)

    const hasTransactions = await transactionsRepository.getByUserId({id});

    if (!hasTransactions) {
      return;
    }

    return hasTransactions;
  }
}

export default GetTransactionService;