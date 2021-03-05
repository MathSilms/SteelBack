import Business from '../../../../models/entities/Business';

class BusinessView {
  id: string;

  name: string;

  login: string;

  created_at: Date;

  updated_at: Date;

  constructor(business: Business) {
    this.id = business.id;
    this.name = business.name;
    this.login = business.login;
    this.created_at = business.created_at;
    this.updated_at = business.updated_at;
  }
}

export default BusinessView;
