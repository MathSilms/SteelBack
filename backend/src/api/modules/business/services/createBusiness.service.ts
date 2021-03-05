import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Business from '../../../../models/entities/Business';
import BusinessView from '../views/business.view';
import BusinessRepository from '../repositories/business.repository';

interface Request {
  name: string;
  login: string;
  email: string;
  razao_social: string;
  cnpj: string;
  cep: string;
  is_cooperative: boolean;
  password: string;
}

class BusinessService {
  public async exec({ name, login, email, cep, cnpj, razao_social, is_cooperative, password }: Request): Promise<BusinessView> {
    console.log({ name, login, email, cep, cnpj, razao_social, password })
    const repository = getRepository(Business);

    console.log("aqui")

    const businessRepository = new BusinessRepository(repository)

    const businessExists = await businessRepository.getByLogin({login});

    if (businessExists) {
      throw new Error('This login is already assigned a user');
    }

    const password_hash = await hash(password, 8);

    const business = await businessRepository.create({
      name,
      login,
      email,
      cep,
      razao_social,
      cnpj,
      is_cooperative,
      password_hash,
    })

    const businessView = new BusinessView(business);

    return businessView;
  }
}

export default BusinessService;
