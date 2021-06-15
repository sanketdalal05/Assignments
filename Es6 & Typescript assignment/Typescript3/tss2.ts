class Account {
    constructor(id, name:string, balance:number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
};
class SavingAccount extends Account {
    interest:number
    constructor(id, name, balance, interest){
        super(id, name, balance);
        this.interest = interest;
    }
    totalBalance(){
        return (this.balance + this.interest);
    }
};
class CurrentAccount extends Account {
    cash_credit:number;
    constructor(id, name, balance, cash_credit){
        super(id, name, balance);
        this.cash_credit = cash_credit;
    }
    totalBalance(){
        return (this.balance + this.cash_credit);
    }
};
var savingAccount1 = new SavingAccount("12345", "sam", 40000, 4000);
var savingAccount2 = new SavingAccount("54321", "john", 10000, 2000);
console.log(savingAccount1.totalBalance());
console.log(savingAccount2.totalBalance());
