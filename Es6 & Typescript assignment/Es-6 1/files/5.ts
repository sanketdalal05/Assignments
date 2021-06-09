let myarray = function userFriend(username,...friends){
    console.log(username);
    console.log(`List of friends ${friends}`);
    
    
}
myarray("john",`sam`,`ron`,`adam`);

let myarray=function add(value = 10){
    console.log(value);
}

myarray();
myarray(5);

function upperCase(a,b,c,d,f){
    console.log(a.toUpperCase());
    console.log(b.toUpperCase());
    console.log(c.toUpperCase());
    console.log(d.toUpperCase());
    console.log(f.toUpperCase());
}
let str = ["puma","lee","nike","reebok","adidas"];

upperCase(...str);