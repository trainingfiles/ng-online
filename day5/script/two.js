"use strict";
// optional parameter
// types for return
function adder(num1 = 0, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1 + num1;
    }
}
;
console.log(adder(10, 6));
console.log(adder(5, 6));
console.log(adder(6));
// use void when you don't expect anything to be returned from the function
function somefun() {
    console.log("somefun was called");
    // return "somefun return";
}
;
console.log(somefun() === undefined);
