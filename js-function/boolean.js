function count_zero(number){
    // number = '';
    console.log(number);
    sum =0;
    for(let i=0;i<number.length;i++){
        if(number[i]==='0'){
            sum++;
          
        }
        //   sum++;
    }
    return sum;

}
console.log(count_zero('101010'));

// function count_zero(number){
//       let count = 0;
//     for(let i=0;i<number.length;i++){
//         if(number[i]==='0'){
//             count++;
//         }

//     }
//     return count;

// }
// console.log('Total zero is ',count_zero('10101010'))