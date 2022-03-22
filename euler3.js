import { getPrimeFactorsOfNumber, isPrime } from "./funtions.js";

var eulerDiv = document.getElementById('euler');

let result = 0;

eulerDiv.textContent = getPrimeFactorsOfNumber(600851475143);