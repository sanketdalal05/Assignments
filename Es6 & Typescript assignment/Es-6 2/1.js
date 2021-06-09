class fibo{
    #previousNo=1;
    #currentNo=2;
    next(){
        return(this.#previousNo+this.#currentNo);
    }
}
let fib=new fibo();
console.log(fib.next());
