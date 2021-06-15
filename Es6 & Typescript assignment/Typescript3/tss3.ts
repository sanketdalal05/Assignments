interface Printable {
    username: string,
    print: (str:string) => string
}

var circle: Printable = {
    username: "sam",
    print: (str) => { return "hello " + str }
}

var employee: Printable = {
    username: "spirit",
    print: (str) => { return "Hello " + str }
}

function printAll(ObjectOne:any, ObjectTwo:any){
    return [
        ObjectOne.print("sam"),
        ObjectTwo.print("john")
    ]
}
console.log(printAll(circle, employee));