function findLongest(array){
const words = array.split(' ');
console.log(words);
let longest = '';
for(let word of words){
      if(word.length>longest.length){
        longest = word;
      }
}
return longest;

}

// const str = 'hellow guyes what are you doing';
console.log('longest word is',findLongest('hellow guyes what are you doing'));
function randNo(min,max){
    const getrand = Math.random()*((max-min)+min);
    return getrand;
}
let rand = randNo(10,20);
console.log(rand);