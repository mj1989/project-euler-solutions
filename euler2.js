import { isGivenNumberEven } from "./funtions.js";

var eulerDiv = document.getElementById('euler');

let result = 0;

let fib_1 = 1;
let fib_2 = 1;
let fib = 0;


while (fib < 4000000 ) {
    fib = fib_1 + fib_2;
    if(isGivenNumberEven( fib )) result += fib;
    fib_1 = fib_2;
    fib_2 = fib;
}
eulerDiv.textContent = result;