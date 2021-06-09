let names = ["Tom", "Ivan", "Jerry"]
 
let arrObject = (names) => {
  let myarray = [];
  for (let n of names){
    myarray.push({name: n, 
      length: n.length});
  }
  console.log(myarray);
}
 
arrObject(names);