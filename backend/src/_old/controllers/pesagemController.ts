import { Request, Response } from 'express';
import PesagemService from '../services/PesagemService';
import UserService from '../services/UserService';


class PesagemController {

    async initPesagem(req: Request, res: Response) {

        const { id, peso, quantidade, local } = req.body;

        const result = await PesagemService.initPesagem(id, local, peso, quantidade);

        switch (result) {
            case 0:
                return res.json({ messagem: "usuário inexistente" }).status(400);
                break;
            case 1:
                return res.status(400).json({ messagem: "Este local não existe" });
                break;
            case 2:
                return res.json({ messagem: "Peso/quantidade insuficiente ou inexistente" }).status(400);
            default:
                return res.json({ messagem: "Success" }).status(200);
        }

    }
}


export { PesagemController };