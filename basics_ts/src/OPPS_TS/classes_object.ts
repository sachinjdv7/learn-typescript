class Account {
  id: number;
  name: string;
  balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) throw Error("Invalid amount");
    this.balance += amount;
  }
}

let account = new Account(1, "sachin", 0);
account.deposit(1_000);
console.log(account instanceof Account);
