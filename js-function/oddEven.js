function condition(num1){
    if(num1 % 2===0){
        console.log('This Is An Even No ',num1);
        num1=num1*2;
    }
    else{
        num1 = num1/2;
         console.log('This Is An Odd No ',num1);
    }
    return num1;
}

console.log('Here is the Output ',condition(5454));