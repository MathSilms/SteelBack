import Session from 'models/entities/Session';

export interface TokenDTO {
  args1: string;
  args2: string;
}

export interface ICreateUserDTO {
  name: string;
  login: string;
  password_hash: string;
}

export interface SessionDTO {
  session: Session;
  token: string;
}
