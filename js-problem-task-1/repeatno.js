
const number=[5,6,11,12,98,5]

function repeat(numbers){
    console.log(numbers);
    const data =[];
    for(const num of numbers){
        if(!data.includes(num)=== true){
            data.push(num);
        }
    }
   return data;
    
}
console.log(repeat(number));
