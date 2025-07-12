const str = 'taking xeldrin 20 is my daily routine XX';
let res = '';
for(let i = 0;i<str.length;i++){
    if(str[i]=='x'){
        res= res + 'y';

    }
    else if(str[i]==='X'){
        res =res+'Y';
    }
     else{
        res = res +str[i];
     }

}
console.log(res);