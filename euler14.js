const euler = document.getElementById('euler');

/*
* Longest Collatz sequence
*/
class Collatz{
    constructor(number){
        this.number = number;
        this.collatzArray = [];
    }

    collatzSequence(number){
        this.collatzArray.push(number);
        if(number === 1){
            return 1;
        }
        else if(number % 2 === 0){
            return this.collatzSequence(number/2);
        }
        else{
            return this.collatzSequence(3*number + 1);
        }      

    }
}

let collatzTempStructure = {
    number: 0,
    lenght: 0,
    collArray: [],
}

let collatzA = new Collatz(3);

let index = 1;
    
while (index <= 1000000) {
    collatzA = new Collatz(index);
    collatzA.collatzSequence(collatzA.number);
    
    if(collatzA.collatzArray.length > collatzTempStructure.lenght){
        collatzTempStructure.number = index;
        collatzTempStructure.lenght = collatzA.collatzArray.length;
        collatzTempStructure.collArray = collatzA.collatzArray;
    }

    index++;
}
    
console.log(collatzTempStructure)    




