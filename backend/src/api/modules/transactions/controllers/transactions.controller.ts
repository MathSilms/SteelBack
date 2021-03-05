import { NextFunction, Request, Response } from 'express';
import HttpController from '@commons/controllers/http.controller';
import CreateTransactionsService from '../services/createTransactions.service';
import GetBalanceService from '@api/modules/users/services/getBalance.service';

class TransactionController extends HttpController {
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { type, total_weighting  } = req.body;

    const { user, business } = req.params

    const getBalance = new GetBalanceService();

    const balance = await getBalance.exec()

    const createTransaction = new CreateTransactionsService();

    const session = await createTransaction.exec({ 
      type,
      total_weighting,
      user,
      business,
      balance,
     });

    this.sendResponse(res, next, session);
  };
}

export default new TransactionController();
