import { isGivenNumberDividedByDivider } from "./funtions.js";

var eulerDiv = document.getElementById('euler');

let result = 0;
for (let index = 0; index < 1000; index++) {
    if(isGivenNumberDividedByDivider(index,3) ||
        isGivenNumberDividedByDivider(index, 5)){
            result = result + index;
        }
}
eulerDiv.textContent = result;