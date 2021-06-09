class Account{
    constructor(id,username,balance){
        this.id = id;
        this.user = username;
        this.balance = balance;
    }
}
class SavingAcc extends Account{
    constructor(id,username,balance,srate){
        super(id,username,balance);
        this.rate=this.balance*srate;
    }
}
class Current extends Account{
    constructor(id,username,balance ,crate){
        super(id,username,balance);
        this.hrate=this.balance*crate;
    }
}

let sanket = new Account(619,"sanket",50000);
let omkar = new SavingAcc(629,"omkar",10000,3.2);
let rahul = new Current(629,"rahul",10000,4.8);

console.log(sanket.balance);
console.log(omkar.rate);
console.log(rahul.hrate);