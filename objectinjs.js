// objects 


const mysym = Symbol()
const user =  {
    name : "keshav" ,

    [mysym] : "mysymbol12",

    age : 19 ,
    college : "RU",
    city : "Jaipur",
    email : "keshav@email.com",
    marks : [10,20,30]
}

// Object.freeze(user)
// user.age = 21
// console.log(user.age);


// console.log(user.name);
// console.log(user.age);
// console.log(user.college);
// console.log(user.city);
// console.log(user.email);
// console.log(user.marks);

// console.log("++++++++++++++++++++++++++++++++++++ ");


// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["college"]);
// console.log(user["city"]);
// console.log(user["email"]);
// console.log(user["marks"]);



// console.log(user[mysym]);
// console.log(typeof(user[mysym]))



user.greet = function(){
    console.log(`hello js user ${user.name}`);
}
console.log(user.greet());