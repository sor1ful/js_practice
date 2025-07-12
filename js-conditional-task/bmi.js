let height = 1.75;
let weight = 80;
let Bmi = weight / (height * height);

console.log('Your BMI Calculated is ' + Bmi);

if (Bmi < 18.5) {
    console.log('You are Underweight');
}
else if(Bmi >= 18.5 && Bmi <= 24.9){
    console.log('You Are Normal');
}

else if(Bmi >= 25 && Bmi <= 29.9){
    console.log('You are Overweighted');
}
else {
    console.log('You are confusing Us');
}