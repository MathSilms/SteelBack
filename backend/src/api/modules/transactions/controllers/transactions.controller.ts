import { NextFunction, Request, Response } from 'express';
import HttpController from '@commons/controllers/http.controller';
import SessionsService from '../services/transactions.service';

class TransactionController extends HttpController {
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { type, total_weighting  } = req.body;

    const { user, business } = req.params

    const createSession = new SessionsService();

    const session = await createSession.exec({ 
      type,
      total_weighting,
      user,
      business
     });

    this.sendResponse(res, next, session);
  };
}

export default new TransactionController();
