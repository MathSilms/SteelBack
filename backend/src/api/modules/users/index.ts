import BaseRouter from '@commons/router/base.router';
import UsersController from './controllers/users.controller';

class UsersRouter extends BaseRouter {
  public controller = UsersController;

  initialize(): void {
    this.post('/', this.controller.create);
    this.get('/:id', this.controller.index);
  }
}

export default new UsersRouter().getRouter();
