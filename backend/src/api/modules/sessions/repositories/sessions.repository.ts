import {  Repository } from 'typeorm';
import User from '../../../../models/entities/User';
import Session from '../../../../models/entities/Session';

interface Request {
  user: User
}


class SessionsRepository {
  private sessionsRepository: Repository<Session>
  constructor(repository: Repository<Session> ){
    this.sessionsRepository = repository
  }
  public async create({ user }: Request): Promise<Session> {
    
    const session = this.sessionsRepository.create({
      user,
    });
  
    await this.sessionsRepository.save(session);

    return session
  }
}

export default SessionsRepository;

