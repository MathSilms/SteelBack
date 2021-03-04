import User from '../../../../models/entities/User';

class UsersView {
  id: string;

  name: string;

  login: string;

  created_at: Date;

  updated_at: Date;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.login = user.login;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}

export default UsersView;
