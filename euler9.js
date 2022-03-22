// a + b + c = 1000
// a^2 + b^2 = c^2
// a < b < c
const eulerDiv = document.getElementById('euler');
let a = 0;
let c = 0;
let b = 0;
let result = [];
for(let x = 1; x <= 1000; x++ ){

    for(let y = 300; y<=1000-x; y++){

        c = y;
        a = 1000 - x - c;
        b = x;
        if( a + b + c == 1000 && a < b && b < c && a*a + b*b == c*c ){
            result = a*b*c;
        }

    }
}
eulerDiv.textContent = result;