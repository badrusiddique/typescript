"use strict";
const age = 123456;
const balance = 123;
const legalName = "John";
const isMale = true;
function render(document) {
    console.log({ document });
}
// arrays
const names = ['J', 'D'];
const countries = ['JJ', 'DD', 1, 22];
console.log({ names });
// tuples
const employee = ['John', 12345];
employee.push('random'); // issue with tuples
console.log({ employee });
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
const medium = Size.Medium;
console.log({ Size, medium });
// with const enum
console.log({ medium });
// function
function add(a, b = 10) {
    return a + b;
}
console.log(add(100));
console.log(add(100, 200));
const manager = {
    id: 1,
    name: "John",
    email: "john@test.com",
    phone: 1234567890,
    getDetails: () => { console.log("details"); }
};
console.log({ manager });
manager.getDetails();
