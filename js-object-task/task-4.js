let student={
    name: 'Babu alom',
    age : 21,
    city: 'uttara',
    isStudent:true
}
 for(const std in student){
    console.log(std);
    // std.count(std.length);
    // console.log(std);
    // std = std.length;
    //  console.log(std.length);
    
}
 const prop = Object.keys(student).length;
    console.log('properties length is ',prop);