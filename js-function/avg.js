function make_avg(numbers){
    // numbers =[]
    sum = 0;

    for(let num of numbers){
        // console.log(num,'length is ',numbers.length);
        sum = sum+num;
        // numbers++;
    }
    console.log(numbers,'= ',sum);
    avarage = sum / numbers.length;
    console.log('avarage of array ',sum,'/',numbers.length);
    return avarage;

}

console.log('avg is ',make_avg([12,3,5,6,45,55,47]));