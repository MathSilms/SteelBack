import { SessionDTO } from '../../../../models/types/dto';

class SessionsView {
  session: {
    id: string;
    user: { id: string };
    created_at: Date;
    updated_at: Date;
  };

  token: string;

  constructor({ session, token }: SessionDTO) {
    this.session = {
      id: session.id,
      user: { id: session.user.id },
      created_at: session.created_at,
      updated_at: session.updated_at,
    };
    this.token = token;
  }
}

export default SessionsView;
