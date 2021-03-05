import { NextFunction, Request, Response } from 'express';
import HttpController from '@commons/controllers/http.controller';
import GetCooperativesService from '../services/getCooperatives.service';

class CooperativesController extends HttpController {
  public index = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {

    const getBusiness = new GetCooperativesService();

    const business = await getBusiness.exec();

    this.sendResponse(res, next, business );
  };
}

export default new CooperativesController();
