interface Balance {
    income: number;
    outcome: number;
    total: number;
}

class BalanceView {
  income: number;

  outcome: number;

  total: number;

  constructor(transaction: Balance) {
    this.income = transaction.income;
    this.outcome = transaction.outcome;
    this.total = transaction.total;
  }
}

export default BalanceView;