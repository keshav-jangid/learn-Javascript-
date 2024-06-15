let user ={
    username : "keshav",
    age : 21 ,
    city :"jaipur",
    welcome : function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
    }
}

user.username = "ram"
user.welcome()
console.log(this);





//arrow funtion

const name = (name) => {
    console.log(name);
}
name("keshav")


let func1 = (num1,num2) => num1 + num2

console.log(func1(10,20))

let func2 =() => {
 username = "keshav"

    console.log(this);
}

func2()





