import { getCustomRepository } from 'typeorm';
import { User } from '../models/User';
import { UsersRepository } from '../repositories/UserRepository';
// import { Cooperatives } from '../models/Cooperatives';
// import { LegalEntities } from '../models/LegalEntities';

// import UserRepository from '../repositories/UserRepository'
class UserService {

    async createUser(name: string, email: string, cep: string, cpf: string) {

        const userRepository = getCustomRepository(UsersRepository);

        try {
            const existEmail = await userRepository.findOne({ email });
            const existCpf = await userRepository.findOne({ cpf });

            console.log(email, existEmail)

            if (existEmail || existCpf)
                return 0;

            const user = await userRepository.create({
                name,
                email,
                cep,
                cpf
            })

            await userRepository.save(user);

            return user;

        } catch (err) {
            throw err;
        }
    }

    async consulPoints(id: string) {

        const userRepository = getCustomRepository(UsersRepository);

        try {

            const user = await userRepository.findUser(id);
            const points = user?.points;

            if (user)
                return points;
            else
                return "usuário não existe";



        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    async consulTotalWeigth(id) {
        const userRepository = getCustomRepository(UsersRepository);

        //console.log("userRepository",userRepository);

        try {
            const user = await userRepository.findOne({ id });

            if (!user)
                return "usuário não existe";

            const weight = user.total_weighing;
            return weight;
        } catch (err) {
            throw err;
        }
    }

    async existUser(id) {
        const userRepository = getCustomRepository(UsersRepository);

        try {
            const user = await userRepository.findOne({ id });

            if (!user)
                return 0;

            return user;
        } catch (err) {
            throw err;
        }
    }
}

export default new UserService;