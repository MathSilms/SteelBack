import { Repository } from 'typeorm';
import Business from '../../../../models/entities/Business';

interface Request {
  login: string
}

interface GetRequest {
  id: string
}

interface CreateRequest extends Request {
  name: string;
  email: string;
  razao_social: string;
  cep: string;
  cnpj: string;
  is_cooperative: boolean,
  password_hash: string;
}

class BusinessRepository {
  private businessRepository: Repository<Business>
  constructor(repository: Repository<Business>){
    this.businessRepository = repository
  }
  public async create({name, login, email, cep, razao_social, cnpj, is_cooperative, password_hash}: CreateRequest): Promise<Business> {
    const business = this.businessRepository.create({
        name,
        login,
        email,
        cep,
        razao_social,
        cnpj,
        is_cooperative,
        password_hash,
    });
    console.log(business)
    await this.businessRepository.save(business);

    return business
  }

  public async getByLogin({ login }: Request): Promise<Business | undefined> {
    const business = await this.businessRepository.findOne({
        where: {
          login,
        },
    });

    return business;
  }

  public async getById({id}: GetRequest): Promise<Business | undefined> {
    const business = await this.businessRepository.findOne(id)

    return business;
  }

  public async get(): Promise<Business[] | undefined> {
    console.log('aqui')
    const business = await this.businessRepository.find()

    return business;
  }
}

export default BusinessRepository;

