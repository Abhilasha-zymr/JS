//Class: A blueprint for creating objects. It encapsulates data and functions that operate on that data.
//Object: An instance of a class. It contains properties and methods defined by the class
//Object-Oriented Programming (OOP) in JavaScript is a 
//programming paradigm that uses objects and classes 
//to organize and manage code, promoting code reuse, scalability, and maintainability
//abstraction:hide detailed information
//this is used for current context
//new : 1.first create empty object called instance
//2.constructor function call and pack the all argument
//3.this keyword all argument inject in this this keyword
const user={
    username:"Abhi",
    login:12,
    signedin:true,

    getUserDetails:function(){
    //console.log('username:${this.username}');
    console.log(this);
    }
}
user.getUserDetails();
console.log(user.username);
console.log(user.getUserDetails);
console.log(this);//global contaxt


const user2={
    username:"Abhi",
    login:12,
    signedin:true,

    getUserDetails:function(){
    //console.log('username:${this.username}');
    console.log(this);
    }
}
function User(username,logincount,isLoggedin){
    
}