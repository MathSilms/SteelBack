import {Request, Response} from 'express';
import LegalPersonService from '../services/LegalPersonService';

class LegalPersonController {

    async createLegal(req: Request, res: Response){
        
        const { name, razao, cnpj, cep, ie, im } = req.body;

        const result = await LegalPersonService.createLegal(name, razao, cnpj, cep, ie, im);

        if(result)
            res.json({result});
        else
            return res.json({Error:"User already exists"}).status(400);
    }
}


export { LegalPersonController };