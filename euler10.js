import { nextPrime } from "./funtions.js";

const eulerDiv = document.getElementById('euler');
let result = 0;

let prime = 2;

while( prime < 2*1000*1000 ){
    result += prime;
    prime = nextPrime(prime);
}

eulerDiv.textContent = result;