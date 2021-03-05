import BaseRouter from '@commons/router/base.router';
import UsersController from './controllers/transactions.controller';

class HealthcheckRouter extends BaseRouter {
  public controller = UsersController;

  initialize(): void {
    this.post('/user/:user/business/:business', this.controller.create);
  }
}

export default new HealthcheckRouter().getRouter();
