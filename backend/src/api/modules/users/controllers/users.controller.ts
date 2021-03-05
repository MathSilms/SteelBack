import { NextFunction, Request, Response } from 'express';
import HttpController from '@commons/controllers/http.controller';
import UsersService from '../services/createUsers.service';
import GetUsersService from '../services/getUser.service';
import GetBalanceService from '../services/getBalance.service';
import getTransactionsService from '../services/getTransactions.service';

class UsersController extends HttpController {
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { name, login, email, cep, cpf, password } = req.body;

    console.log({name, login, email, cep, cpf, password})

    const createUser = new UsersService();

    console.log(createUser)
    const user = await createUser.exec({ name, login, email, cep, cpf, password });

    console.log(user)
    this.sendResponse(res, next, user);
  };

  public index = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = req.params;

    const getUser = new GetUsersService();

    const getTransactions = new getTransactionsService();

    const getBalance = new GetBalanceService();

    const user = await getUser.exec({ id });

    const transactions = await getTransactions.exec({ id })

    const balance = await getBalance.exec();

    this.sendResponse(res, next, {user, transactions, balance});
  };
}

export default new UsersController();
