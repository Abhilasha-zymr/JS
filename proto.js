function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayHello=function(){
    console.log(`helli ,${this.name}`);
}
const myperson=new Person("abhi",20);
console.log(myperson);
myperson.sayHello()

