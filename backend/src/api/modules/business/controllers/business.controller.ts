import { NextFunction, Request, Response } from 'express';
import HttpController from '@commons/controllers/http.controller';
import BusinessService from '../services/createBusiness.service';
import GetBusinessService from '../services/getBusiness.service';

class BusinessController extends HttpController {
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { name, login, email, cep, cnpj, razao_social, is_cooperative, password } = req.body;

    console.log({ name, login, email, cep, cnpj, razao_social, is_cooperative, password })

    const createBusiness = new BusinessService();

    console.log(createBusiness)
    const business = await createBusiness.exec({ name, login, email, cep, cnpj, razao_social, is_cooperative, password });

    console.log(business)
    this.sendResponse(res, next, business);
  };

  public index = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = req.params;

    const getBusiness = new GetBusinessService();

    const business = await getBusiness.exec({ id });

    

    this.sendResponse(res, next, business );
  };
}

export default new BusinessController();
