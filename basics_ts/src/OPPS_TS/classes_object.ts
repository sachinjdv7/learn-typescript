class Account {
  readonly id: number;
  name: string;
  balance: number;
  nickname?: string;
  constructor(id: number, name: string, balance: number, nickname?: string) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.balance = balance;
  }
  deposit(amount: number): void {
    if (amount <= 0) throw Error("Invalid amount");
    this.balance += amount;
  }
}

let account = new Account(1, "sachin", 0);
account.deposit(1_000);
// account.id = 0;
console.log(account instanceof Account);






















