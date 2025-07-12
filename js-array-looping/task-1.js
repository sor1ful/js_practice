const colors = ['red', 'blue', 'green', 'yellow','orange']
let rev_color = [];
for(const color of colors){
    // rev_color.push(color);
    // console.log(rev_color);
    rev_color.unshift(color);
}
console.log(rev_color);
