const names = ['Tom','Tim','Tin','Tik']

let new_name ='';

for(const name of names ){
    new_name = new_name.concat(name,'');
}
console.log(new_name);