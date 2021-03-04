import {  Repository } from 'typeorm';
import Transaction from '../../../../models/entities/Transaction';
import Session from '../../../../models/entities/Session';

interface Request {
  transaction: Transaction
}


class TransactionsRepository {
  private transactionsRepository: Repository<Transaction>
  constructor(repository: Repository<Transaction> ){
    this.transactionsRepository = repository
  }
  public async create({ transaction }: Request): Promise<Transaction> {
    
    const session = this.transactionsRepository.create({
      transaction,
    });
  
    await this.transactionsRepository.save(session);

    return session
  }
}

export default TransactionsRepository;

