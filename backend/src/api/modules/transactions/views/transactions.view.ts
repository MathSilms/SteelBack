import { TransactionDTO } from '../../../../models/types/dto';

class TransactionView {
  transaction: {
    id: string;
    user: { id: string };
    business: { id: string };
    type: "income" | "outcome";
    total_weighting: number;
    created_at: Date;
    updated_at: Date;
  };
  constructor({ transaction }: TransactionDTO) {
    this.transaction = {
      id: transaction.id,
      user: { id: transaction.user.id },
      business: { id: transaction.business.id },
      type: transaction.type,
      total_weighting: transaction.total_weighting,
      created_at: transaction.created_at,
      updated_at: transaction.updated_at,
    };
  }
}

export default TransactionView;
