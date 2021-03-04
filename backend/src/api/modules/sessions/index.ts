import BaseRouter from '@commons/router/base.router';
import UsersController from './controllers/sessions.controller';

class HealthcheckRouter extends BaseRouter {
  public controller = UsersController;

  initialize(): void {
    this.post('/', this.controller.create);
  }
}

export default new HealthcheckRouter().getRouter();
