var eulerDiv = document.getElementById('euler');

function euler6(number){
    return Math.pow((number+1)*number/2,2) - number*(number+1)*(2*number+1)/6;
    
}


eulerDiv.textContent = euler6(100);