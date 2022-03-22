import { isPalindromic } from "./funtions.js";

var eulerDiv = document.getElementById('euler');

let depth = 90;
let number = 0;
for (let i = 999; i > 999 - depth; i--) {
    for (let j = 999; j > 999 - depth; j-- ){
        if(isPalindromic(i*j) && i*j > number ) number = i *j ;
    }
    
}

eulerDiv.textContent = number;