

// function saymyname(){
//     console.log("KESHAV");
// }
// saymyname()

// function addtwoumbers(a,b){
//     return a+b
// }
// let result =  addtwoumbers(10 , 20)
// console.log(result);


function loginuser(username = "keshav"){
    if(!username){
        console.log("please enter a valid userame ");
        return
    }
    return `${username} just logged in`
}

let loginmessage = loginuser()
console.log(loginmessage);


