class Account {
  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) throw Error("Invalid amount");
    // Record transaction
    this._balance += amount;
  }

  private calculateTax() {}
  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");

    this._balance = value;
  }
}

let account = new Account(1, "sachin", 0);
account.deposit(1_000);
// account.balance = -1;
console.log(account.balance);
account.balance = 5;

// account.id = 0;
console.log(account instanceof Account);

// access modifiers

/**
 * In fucture what if we want to track transations in deposit
 * Everytime deposit or withdraw money we want to record transaction
 * so we know who pay how much and when
 */

/**
 * access modifiers
 * 1. public
 * 2. private
 * 3. protected
 */
