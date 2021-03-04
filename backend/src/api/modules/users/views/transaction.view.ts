interface Balance {
    income: number;
    outcome: number;
    total: number;
}

class TransactionsView {
  income: number;

  outcome: number;

  total: number;

  constructor(transaction: Balance) {
    this.income = transaction.income;
    this.outcome = transaction.outcome;
    this.total = transaction.total;
  }
}

export default TransactionsView;