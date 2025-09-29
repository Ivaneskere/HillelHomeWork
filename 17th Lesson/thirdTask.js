class BankAccount {    
    constructor(money) {
        this.money = money
        this.finalyBalance = this.money
    }

    getBalance() {
        return this.finalyBalance
    }

    deposit(money) {
        this.finalyBalance += money
    }

    withdraw(money) {
        this.finalyBalance -= money
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300