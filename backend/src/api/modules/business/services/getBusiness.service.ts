import { getRepository } from 'typeorm';
import Business from '../../../../models/entities/Business';
import BusinessRepository from '../repositories/business.repository';
import BusinessView from '../views/business.view';

interface Request {
  id: string;
}

class GetBusinessService {
  public async exec({ id }: Request): Promise<BusinessView> {
    console.log(id)
    const repository = getRepository(Business);
    
    const businessRepository = new BusinessRepository(repository)

    const user = await businessRepository.getById({id});

    if (!user) {
      throw new Error('This login/password is incorrect');
    }

    const userView = new BusinessView(user);

    return userView;
  }
}

export default GetBusinessService;
