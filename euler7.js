import { nextPrime } from "./funtions.js";

var eulerDiv = document.getElementById('euler');

let primeNumber = 2;
let indexLastPrime = 10001;

for (let index = 1; index < indexLastPrime; index++) {
    primeNumber = nextPrime(primeNumber);
    
}
eulerDiv.textContent = primeNumber;