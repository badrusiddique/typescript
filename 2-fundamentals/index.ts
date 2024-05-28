const age: number = 123_456;
const balance = 123;

const legalName: string = "John";

const isMale: boolean = true;

function render(document: any) {
    console.log({ document });
}

// arrays
const names: string[] = ['J', 'D'];
const countries: (string | number)[] = ['JJ', 'DD', 1, 22];
console.log({ names });


// tuples
const employee: [string, number] = ['John', 12345];
employee.push('random');        // issue with tuples
console.log({ employee });

// enum
enum Size {Small, Medium, Large};
const medium: Size = Size.Medium;
console.log({ Size, medium })
// with const enum
console.log({ medium });


// function
function add(a: number, b: number = 10): (number | undefined) {
    return a + b;
}
console.log(add(100));
console.log(add(100, 200));

// object
type Employee = {
    readonly id: number,
    name: string,
    email: string,
    phone: number,
    description?: string,   // optional field
    getDetails: () => void
};
const manager: Employee = {
    id: 1,
    name: "John",
    email: "john@test.com",
    phone: 1234567890,
    getDetails: () => { console.log("details") }
    
}
console.log({ manager });
manager.getDetails();