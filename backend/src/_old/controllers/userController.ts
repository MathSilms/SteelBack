import { Request, Response } from 'express';
import UserService from '../services/UserService';


class UserController {

    async createUser(req: Request, res: Response) {

        const { name, email, cep, cpf } = req.body;

        try {
            const result = await UserService.createUser(name, email, cep, cpf);

            if (result != 0)
                return res.json({ message: "success", result });
            else
                return res.json({ Error: "User already exists" }).status(400);

        } catch (err) {
            return res.json({Error:"solicitação inválida"})
        }

    }

    async consulPoints(req: Request, res: Response) {

        const id = req.params.id;
        const result = await UserService.consulPoints(id);


        //console.log("result",result);

        if (result === 'usuário não existe')
            return res.json({ messagem: result }).status(400);

        return res.json({ messagem: "success", result });
    }

    async consulTotalWeigth(req: Request, res: Response) {

        const id = req.params.id;

        const result = await UserService.consulTotalWeigth(id);

        if (result === 0)
            return res.json({ messagem: "usuário não existe" }).status(400);

        return res.json({ messagem: "success", result });
    }

    async consulTotalWeigthAndPoints(req: Request, res: Response) {

        const id = req.params.id;

        const weight = await UserService.consulTotalWeigth(id);
        const points = await UserService.consulPoints(id);

        if (weight || points === 0)
            return res.json({ messagem: "usuário não existe" }).status(400);

        return res.json({ messagem: "success", peso: weight, pontos: points });
    }
}


export { UserController };