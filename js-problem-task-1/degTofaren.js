function convert(celciousTemp){
    const temp = celciousTemp;
    // console.log('Degree Celcious ')
    const res = (temp*(9/5))+32;
    return res;

}

const farenTemp = convert(600);
console.log('Farenheit temparature is ',farenTemp);