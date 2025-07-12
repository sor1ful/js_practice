let mark = 80;
let fmark= 70;

if(mark>=90 && mark<=100){
    console.log('Your Number is '+ mark + ' Your Grade Is A+');
    if(fmark>mark){
        console.log('your friend mark is getter than you. So go for lunch')
    }
    else{
        console.log('I am better than my friend')
    }
}
else if(mark>=80 && mark<=89){
    console.log('Your Number is '+ mark + ' Your Grade Is A');
     if(fmark>mark){
        console.log('your friend mark is getter than you. So go for lunch')
    }
    else{
        console.log('I am better than my friend')
    }
}
else if(mark>=70 && mark<=79){
    console.log('Your Number is '+ mark + ' Your Grade Is A-');
     if(fmark>mark){
        console.log('your friend mark is getter than you. So go for lunch')
    }
    else{
        console.log('I am better than my friend')
    }
}
else if(mark>=60 && mark<=69){
    console.log('Your Number is '+ mark + ' Your Grade Is B');
}
else if(mark>=50 && mark<=59){
    console.log('Your Number is '+ mark + ' Your Grade Is C');
}

else if(mark>=40 && mark<=49){
    console.log('Your Number is '+ mark + ' Your Grade Is D');
}
else if(mark>=33 && mark<=39){
    console.log('Your Number is '+ mark + ' Your Grade Is E');
}
else{
    console.log('You Are Succesfully Failed');
}