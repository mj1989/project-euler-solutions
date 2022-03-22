export function isGivenNumberDividedByDivider(number, divider){
    if( number % divider == 0 ) return true;
    else return false;
}
export function isGivenNumberEven(number){
    if( number % 2 == 0 ) return true;
    else return false; 
}
export function nextPrime(number){
    let result = number + 1;
    while(!isPrime(result)){
        result ++;
    }
    return result;
}

export function isPrime(number){
    let divider = 2;
    let result = true;
    if(number < 2) return false;
    if(number == 2) return result;
    if(number == 3) return result;

    while( divider <= Math.sqrt(number)){
        
        if(number % divider == 0) {
            result = false;
            
            return result;
        }
        
        divider++;
    }
    return result;
}
export function getPrimeFactorsOfNumber(number){
    let divider = 2;
    let primeFactors = [];
    while( divider <= number  ){
        if( number % divider == 0 ){
            if( isPrime(divider)) primeFactors.push(divider);
            number = number / divider;
        }
        divider ++;
    }
    return primeFactors;
}
export function getPrimeFactorsOfNumberWithPowers(number){
    let divider = 2;
    let primeFactors = [];
    let power = 1;
    let found = null;

    while( divider <= number  ){
        
        if( number % divider == 0 ){
            found =  primeFactors.find(element => element[0] == divider);
            if( found ){
                primeFactors.forEach(element => {
                    if(element[0] == divider){
                        element[1] += power;
                    }
                });
            }
            else{
                power = 1;
                primeFactors.push([divider, power]);
            }
            
            number = number / divider;
        }
        else{
            divider = nextPrime(divider);
            power = 1;
        }
       
    }
    return primeFactors;
}
export function leastCommonMultiple(numbers){
    //numbers is an array

    let result = [];
    let found = null;
    let primeFactosWithPowers = [];
    let lCM = 1;
    numbers.forEach(number => {
        primeFactosWithPowers = getPrimeFactorsOfNumberWithPowers(number);
        
        primeFactosWithPowers.forEach(element => {
            found = result.find(el => el[0] == element[0]);
            if( found ){
                result.forEach( el => {
                    if(el[0] == element[0]){
                        if(element[1] > el[1]){
                            el[1] = element[1];
                        }
                    }
                });
            }
            else{
                result.push(element);
            }
        });

    });

    result.forEach(element =>{
        lCM = lCM * Math.pow(element[0], element[1]);
    });
    return lCM;
}
export function isPalindromic(number){
    //changing direction just pivot from number to rebmun
    //for example 123 to 321
    let ArrayFromNumber = Array.from(String(number));
    let power = ArrayFromNumber.length - 1;
    let reversedNumber = 0;
    while( power >= 0 ){
        reversedNumber += Number(ArrayFromNumber.pop())*Math.pow(10, power);
        power --;
    }
    if( reversedNumber == number) return true;
    else return false;
}
//brute force recurention
export function nthTriangleNumber(n_index){
    if( Number.isInteger(n_index) == false) return -1;
    if( n_index < 1 ) return 0;
    if( n_index == 1 ) return 1;
    else return n_index + nthTriangleNumber(n_index - 1);
}
//mathematical shortcut
export function nTriangleNumber(n_index){
    if( Number.isInteger(n_index) == false) return -1;
    if( n_index < 1 ) return 0;
    else return n_index*(n_index+1)/2;
}
//next triangle number from some triangle number
export function nextTriangleNumber(triangleNumber){
    return triangleNumber + ( Math.sqrt( 1 + 8 * triangleNumber ) - 1 )/2 + 1;
}
//all factors of a number including 1 and this number
export function factors(number){
    let initNumber = number;
    let factors = [];
    let divider = 1;
   
  
    while( divider < number ){
        
        if(initNumber % divider == 0){
            factors.push(divider);
            number = initNumber / divider;
            if(divider < number) factors.push(number);
        }    
        
        divider++;
        
    }
    return factors
}
