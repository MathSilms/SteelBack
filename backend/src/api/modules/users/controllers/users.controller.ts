import { NextFunction, Request, Response } from 'express';
import HttpController from '@commons/controllers/http.controller';
import UsersService from '../services/createUsers.service';
import GetUsersService from '../services/getUser.service';
import transactionsService from '../services/transactions.service';

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

    const createBalance = new transactionsService();

    const user = await getUser.exec({ id });

    const balance = await createBalance.exec();

    this.sendResponse(res, next, {user, balance});
  };
}

export default new UsersController();
