// objects 


// const mysym = Symbol()
// const user =  {
//     name : "keshav" ,

//     [mysym] : "mysymbol12",

//     age : 19 ,
//     college : "RU",
//     city : "Jaipur",
//     email : "keshav@email.com",
//     marks : [10,20,30]
// }

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



// user.greet = function(){
//     console.log(`hello js user ${user.name}`);
// }
// console.log(user.greet());






const userdata = new Object()


userdata.id = 101,
userdata.name = "keshav"
userdata.age = 23
userdata.isloggedin = false



// console.log(userdata);
// console.log(userdata.id)
// console.log(userdata.name);
// console.log(userdata.age);
// console.log(userdata.isloggedin);



const userinfo = {
    name: {
        fullname: {
            firstname : "keshav",
            lastname : "jangid"
        }
    },
    contact : {
        phone : 9864945352,
        email :"info@keshav.com"
    }
} 
// console.log(userinfo.name.fullname.firstname);
// console.log(userinfo.name.fullname.lastname);
// console.log(userinfo.contact.email); 
// console.log(userinfo.contact);


const obj1 = {
    1: "a",
    2 :"b",

}
const obj2 = {
    3: "c",
    4 :"d",

}

// const obj3 = Object.assign({},obj1,obj2)
// const obj4 = {...obj1,...obj2}                            //  spread operator
// console.log(obj3);
// console.log(obj4);





const newarray = [
    {
        id : 101,
        name : "a"

    },
    {
        id:102,
        name : "b"

    },
    {
        id : 103,
        name : "c"
    }
]

// console.log(newarray[0].id , newarray[0].name);

console.log(Object.keys(obj1));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));