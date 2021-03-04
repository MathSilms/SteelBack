import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { Cooperatives } from '../models/Cooperatives';
//import { LegalEntities } from '../models/LegalEntities';

class PesagemService {

    async initPesagem(id, local, weight, amount,) {

        console.log(id)

        const userRepository = getRepository(User);
        const cooperativeRepository = getRepository(Cooperatives);

        try {
            const existUser = await userRepository.findOne({ id });
            const existLocal = await cooperativeRepository.findOne({ id: local });

            if (!existUser)
                return 0

            if (!existLocal)
                return 1;

            if (weight > 0 && amount > 0) {

                // user

                let totalWeightUser = existUser.total_weighing;
                let newWeightUser = totalWeightUser + weight;

                let totalPoints = existUser.points;
                let newTotalPoints = totalPoints + amount;

                await userRepository.update(id, { total_weighing: newWeightUser, points: newTotalPoints });

                // cooperatives
                let totalWeightLocal = existLocal.total_weighing;
                let limitWeightLocal = existLocal.limit_weighing;

                if (limitWeightLocal >= totalWeightLocal + weight)
                    console.log(`O estoque da ${existLocal.name} está no limite estabelecido!`) // simulando um sistema de notificação

                let newWeightLocal = totalWeightLocal + weight;

                let totalAmountLocal = existLocal.total_amount;
                let newAmountLocal = totalAmountLocal + amount;

                await cooperativeRepository.update(local, { total_weighing: newWeightLocal, total_amount: newAmountLocal });

            } else {
                return 2;
            }

        } catch (err) {
            throw err;
        }
    }

}

export default new PesagemService;