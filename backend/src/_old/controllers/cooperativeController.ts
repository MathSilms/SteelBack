import { Request, Response } from 'express';
import CooperativeService from '../services/CooperativeService';


class CooperativeController {

    async createCooperatives(req: Request, res: Response) {

        const { name, cnpj, cep, limit } = req.body;
        
        const result = await CooperativeService.createCooperatives(name, cnpj, cep, limit);

        if (result != 0)
            res.json({message:"success", result });
        else
            return res.json({ Error: "User already exists" }).status(400);
    }

}


export { CooperativeController };