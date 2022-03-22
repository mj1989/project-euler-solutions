import { nTriangleNumber, nextTriangleNumber, factors } from "./funtions.js";

const eulerDiv = document.getElementById('euler');

let triangleNumber = 1;//it must be triangle number
let factorsNumber = factors(triangleNumber).length;
let limit = 501;
while( factorsNumber < limit ){

   // factorsNumber = factors(nextTriangleNumber(triangleNumber)).length;

    if( factorsNumber == limit - 1 ) {
        break;
    }
    if(factorsNumber < limit ){
        triangleNumber = nextTriangleNumber(triangleNumber);
        factorsNumber = factors(triangleNumber).length;
        
    }
  
}

eulerDiv.textContent = triangleNumber;