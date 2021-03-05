import BaseRouter from '@commons/router/base.router';
import UsersController from './controllers/business.controller';
import CooperativesController from './controllers/cooperatives.controller';

class UsersRouter extends BaseRouter {
  public userController = UsersController;
  public cooperativesController = CooperativesController;

  initialize(): void {
    this.post('/', this.userController.create);
    this.get('/cooperatives', this.cooperativesController.index);
    this.get('/:id', this.userController.index);
  }
}

export default new UsersRouter().getRouter();
