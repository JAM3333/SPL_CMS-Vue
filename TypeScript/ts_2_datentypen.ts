let num:number = 4;
let title:string = "asdf";
let bool:boolean = true;

function hello(a:string): void {
    console.log(`Name is: ${a}`)
}

interface Person {
    firstname: string,
    lastname: string,
    age: number,
    isMale?: boolean
}

const person:Person = {
    firstname: "Nils",
    lastname: "Asdf",
    age: 70,
}

function printName(person: any){
    console.log(person.firstname)
}

printName(person)