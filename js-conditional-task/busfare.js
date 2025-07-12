let ticketPrice = 800;
let age = 15;
let student= true;
let studentdis= ticketPrice*(50/100);
let seniordis = ticketPrice*(15/100);
if(age<10){
    console.log('You dont need any fare of ticket')
}
else if(age>10 && student==true){
    console.log('You are Student Your tickrt fare is '+studentdis);

}
else if(age >= 60){
    console.log('You are senior citizen so your ticket fare is '+seniordis);
}
else{
    console.log('Please give ticket fare '+ ticketPrice);
}