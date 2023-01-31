// ################## PART 1 #################
//EX1 
//A
class Shape {
    constructor(name,sides,sideLength){
        this.name = name
        this.sides = sides
        this.sideLength = sideLength
    }
    calcPerimeter() {
        let perimeter = this.sides*this.sideLength
        console.log(`Perimeter: ${this.name}` , perimeter);
    }
}

let square = new Shape ("square",4,5);
square.calcPerimeter()
let triangle = new Shape ("triangle",4,5);
triangle.calcPerimeter()

//B
class Square extends Shape {
  constructor (name,sides,sideLength) {
    super(name,sides,sideLength);
    this.name = "Square";
    this.sides = 4;
    }

    calcArea() {
    let calc = this.sideLength*this.sideLength
    return `This is the Square calcArea: ${calc}`
  }

}
let square2 = new Square();
square2.sideLength = 4
console.log(square2);
console.log("area:" ,square2.calcArea()); 
console.log(square2);
square2.calcPerimeter(); 

//EX2
//A
class Circle {
    static PI = 3.14;
    constructor(radius){
        this.radius = radius;
    }
    area(){
       let pow = Math.pow(this.radius,2)
       console.log(pow*(Circle.PI));  
    }
}

let circle = new Circle(4)
circle.area()
//B
class Account {
    constructor(owner,balance){
        this.owner = owner
        this.balance = balance
    }
    static create (owner) {
        return new Account(owner,0)
    }
}

let a = Account.create('Yuli')
console.log(a);

//EX3
//1
const person =  {
  name: "shir",
  
  get nameToUp(){
    return this.name.toUpperCase()
  }
}

console.log(person.nameToUp);


//2
const product  = {
  name: "Shon",
  price: 0,

  get thePrice(){
    return this.price;
  },

  set roundThePrice(p){
      this.price = Math.round(p);
  },
};

console.log(product);
product.roundThePrice = 15.67
console.log(product);

//EX4
// class Circle {
//   #raduis;
//   constructor(value) {
//     this.#raduis = value;
//     this.diameter = diameter;
//   }

//   get diameter(){
//     return this.#raduis*2
//   }

//   set diameter() {
//     this.diameter = 
//   }

// }

//EX5
class Person2 {
  #firstName;
  #lastName;
  #age;
  constructor(valueF, valueL , valueA) {
    this.#firstName = valueF
    this.#lastName = valueL
    this.#age = valueA
  }

  displayInfo(){
    return `first name: ${this.#firstName}, last name: ${this.#lastName}, age: ${this.#age} years old`
  }

  get age() {
    return this.#age
  }
  
  set age(value){
    if(value < 0) {
      console.log("the age is negative number")
      return;
    }
    this.#age = value
  }
}

const person1 = new Person2 ("John", "Doe", 30);

console.log(person1.displayInfo());
person1.age = -10;

//EX6
class BankAccount {
  constructor (accountNumber ,accountHolder ,accountBalance){
    this.accountNumber = accountNumber
    this.accountBalance = accountBalance
    this.accountHolder = accountHolder
  }

  checkBalance (){
    return this.accountBalance
  }
  deposit(num) {
    return this.accountBalance += num
  }
  withdraw(num){
    return this.accountBalance -= num
  }

}

const avi = new BankAccount ("1212", "avi", 100)
console.log({avi});
console.log("check balance",avi.checkBalance());
console.log("add money deposit", avi.deposit(50));
console.log("remove money withdraw",avi.withdraw(60));

//bonus 6
// class BankAccount {
//   constructor (accountNumber ,accountHolder ,accountBalance){
//     this._accountNumber = accountNumber
//     this._accountBalance = accountBalance
//     this._accountHolder = accountHolder
//   }

//   get balance(){
//     return this._accountBalance;
//   }

//   get info(){
//     return {
//       balance: this._accountBalance,
//       accountNumber: this._accountNumber,
//       accountHolder: this._accountHolder,
//     }
//   }

//   set deposit(num){
//     this._accountBalance +=  num
//   }
//   set withdraw(num){
//     this._accountBalance -= num
//   }

// }

// const avi = new BankAccount ("1212", "avi", 100)
// console.log({avi});
// console.log("add money deposit", avi.deposit = 50);
// console.log({avi});
// console.log("remove money withdraw",avi.withdraw = 60);
// console.log({avi});

//EX7
class Animal {
  constructor(name,species){
    this.name = name
    this.species = species
  }
  makeSound(){
    return " the animal is making a sound"
  }
}

class Dog extends Animal {
  constructor (){
    super();
  }
  bark(){
    return "the dog is barking"
  }
}

class Cat extends Animal {
  constructor (){
    super();
  }
  meow(){
    return "the cat is meowing"
  }
}
class Lion extends Animal {
  constructor (name){
    super(name);
  }
  roar(){
    return "the lion is roaring"
  }
}

const lion = new Lion("Rexi") 
console.log(lion);
console.log(lion.roar());


// ################## PART 2 #################

//EX1
class Person {
  constructor (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(){
    return `your name is ${this.firstName} ${this.lastName}`
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, studentId){
    super(firstName, lastName, age);
    this.studentId = studentId;
  }

  getDetails(){
    return `your name is ${this.firstName} ${this.lastName}, and my student id is ${this.studentId}`
  }
}

//EX2
class NewAccount{
  constructor(balance){
    this._balance = balance;
  }

  get currentBalance() {
    return this._balance;
  }
  set currentBalance(num){
    this._balance = num;
  }
}

let account1 = new NewAccount(0);
console.log(account1);
console.log("defined", account1.currentBalance);
console.log("undefined", account1._currentBalance);
account1.currentBalance = 100;
console.log("defined", account1.currentBalance);

//EX3
class Car {
  #make;
  #model;
  #year;
  constructor(valueMake, valueModel , valueYear) {
    this.#make = valueMake
    this.#model = valueModel
    this.#year =  valueYear
  }

  get fullData (){
    return [this.#make, this.#model,this.#year] 
  }

  set changeData (arr){
    this.#make = arr[0]
    this.#model = arr[1]
    this.#year = arr[2]
  }
}

const car = new Car("Toyota", "Camry", 2020);
console.log(car);
car.changeData = ["Honda", "Civic", 2024]
console.log("car2",car);

//EX4
class BankAccountEX4 {
  #balance;
  #owner;
  #transactions;
  constructor(valueB, valueO, valueT) {
    this.#balance = valueB
    this.#owner = valueO
    this.#transactions = [valueT]
  }

  deposit(num){
    this.#balance += num
    this.#transactions.push (`new tran of adding: ${num}`)
    // return this.#balance , this.#transactions 
  }
  
  withdraw(num){
    this.#balance -= num
    this.#transactions.push (`new tran of removing: ${num}`)
    // return this.#balance , this.#transactions 
  }

  getBalance(){
    return `current balance : ${this.#balance}`
  }
  getTransactions(){
    return `current balance : ${this.#transactions}`
  }

}

let newAccount = new BankAccountEX4 (0,'Refal',"");
console.log(newAccount);
console.log(newAccount.deposit(90)); 
console.log(newAccount.getBalance());