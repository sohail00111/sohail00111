//// Dates ========

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date (2024 , 0,23)

//let myCreatedDate = new Date (2024 ,1  ,23, 5,3)
//let myCreatedDate =new Date ("2024-01-14")
console.log(myCreatedDate.toDateString());

let mycreatedDate = Date ("01-14-2024")

console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now ()

console.log(myTimeStamp);
//console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());