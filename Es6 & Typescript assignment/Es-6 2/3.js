function ArmstrongNo(beg,end) {
    let array1=[];
    if (end>200){
        return 'limit exceed';
    }
    for (let i=beg; i<=end; i++) {
        let numofdigits = i.toString().length; 
        let sum=0;
        let temp=i;
        while (temp>0) {
            let rem=temp % 10;
            sum += rem ** numofdigits;
            temp = parseInt(temp/10)
        }
        if (sum==i){
            array1.push(i);
        }
    }
    return array1;
}

let nextarmstrong = () => {
    let count = 0
    return{
        next: () => {
            let arr=ArmstrongNo(0,200);
            return count < arr.length ?
                {arm_value: arr[count++], done: false} :
                {value: undefined, done: true}

        }
    }
}
const armiterator=nextarmstrong();
console.log(armiterator.next());
console.log(armiterator.next());



