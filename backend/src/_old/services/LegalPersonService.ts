import { getRepository } from 'typeorm';
// import { User } from '../models/User';
// import { Cooperatives } from '../models/Cooperatives';
import { LegalEntities } from '../models/LegalEntities';

class LegalPersonService {

    async createLegal(nome, razao, cnpj, cep, ie, im) {

        const legalPersonRepository = getRepository(LegalEntities);

        try {
            const existRazao = await legalPersonRepository.findOne({ razao });
            const existCnpj = await legalPersonRepository.findOne({ cnpj });

            if (existRazao || existCnpj)
                return undefined;

            const legalEntitie = legalPersonRepository.create({
                nome,
                razao,
                cnpj,
                cep,
                ie,
                im
            })

            await legalPersonRepository.save(legalEntitie);

            return legalEntitie;

        } catch (err) {
            throw err;
        }
    }
}

export default new LegalPersonService;