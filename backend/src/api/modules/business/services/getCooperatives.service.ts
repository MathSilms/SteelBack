import { getRepository } from 'typeorm';
import Business from '../../../../models/entities/Business';
import BusinessRepository from '../repositories/business.repository';
import BusinessView from '../views/business.view';



class GetCooperativesService {
  public async exec(): Promise<BusinessView[] | undefined> {

    const repository = getRepository(Business);
    
    const businessRepository = new BusinessRepository(repository)

    const hasBusiness = await businessRepository.get();

    if(!hasBusiness){
      return;
    }

    const business = hasBusiness
    .filter( business => business.is_cooperative)
    .map(business => new BusinessView(business))

    return business;
  }
}

export default GetCooperativesService;
