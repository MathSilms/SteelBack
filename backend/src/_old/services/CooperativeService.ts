import { getRepository } from 'typeorm';
// import { User } from '../models/User';
import { Cooperatives } from '../models/Cooperatives';
// import { LegalEntities } from '../models/LegalEntities';

class CooperativeService {

    async createCooperatives(name, cnpj, cep, limit) {

        const cooperativeRepository = getRepository(Cooperatives);
        
        try {
            const existCnpj = await cooperativeRepository.findOne({ cnpj });

            if (existCnpj  || limit <= 0)
                return 0;

            const cooperatives = cooperativeRepository.create({
                name,
                cnpj,
                cep,
                limit_weighing:limit,
            })

            await cooperativeRepository.save(cooperatives);

            return cooperatives;

        } catch (err) {
            throw err;
        }
    }
}

export default new CooperativeService;