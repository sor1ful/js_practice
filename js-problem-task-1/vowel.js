function countvowel(str){
    let count =[];

    for(item of str){
        if(item == 'a'||item=='e'||item =='i'||item =='o'||item == 'u'){

            count.push(item);
        }

    }
    console.log('vowels found ', count.join(', '));
    return count.length;
    
}
console.log(countvowel('ami ekjon bangladeshi'));

// console.log('Total vowel is ',count.length);