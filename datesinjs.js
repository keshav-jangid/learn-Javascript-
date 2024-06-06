let myDate  = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let newdate = new Date(2023 ,0,23 )
console.log(newdate)
console.log(newdate.getDate())
console.log(newdate.getDay())

let timestamp =  Date.now()
console.log(Math.floor(Date.now()))

let mydate = new Date()
console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getHours());



console.log(mydate.toLocaleString(`default`, {
    weekday : "long"
}));

