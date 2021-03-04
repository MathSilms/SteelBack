import { NextFunction, Request, Response } from 'express';
import HttpController from '@commons/controllers/http.controller';
import SessionsService from '../services/sessions.service';

class SessionsController extends HttpController {
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { login, password } = req.body;

    const createSession = new SessionsService();

    const session = await createSession.exec({ login, password });

    this.sendResponse(res, next, session);
  };
}

export default new SessionsController();
