class Account {
  readonly id: number;
  name: string;
  private _balance: number;
  nickname?: string;
  constructor(id: number, name: string, balance: number, nickname?: string) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this._balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) throw Error("Invalid amount");
    // Record transaction
    this._balance += amount;
  }

  private calculateTax() {}
  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "sachin", 0);
account.deposit(1_000);
// account.balance = -1;
console.log(account.getBalance());

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
