//✅ 1. Clean Code — Before / After

// 1.1 Meaningful Names

// Before

let n = 10;

//After

let maxUsers=10;

// 1.2 Single-Responsibility

// Before

function handleUser(user) {
    console.log("saving...");
    database.save(user);
    sendWelcomeEmail(user);
  }

//after
function saveUser(user) {
    database.save(user);
}
  
function notifyUser(user) {
sendWelcomeEmail(user);
}

const saveUser = user => database.save(user)
const notifyUser = user => sendWelcomeEmail(user)

// 1.3 Avoid Deep Nesting

// Before

if (user){
    if(user.active){
        startSession(user)
    }
}

// After

if (!user || !user.active) return;
startSession(user)

// 1.4 Remove Magic Numbers

//Before

price = price + price * 10

//After

const TAX_RATE = 10
price += price*TAX_RATE

// 1.5 Using Default Parameters

// Before

function greet(name) {
    const userName = name || 'Guest';
    console.log(`Hello, ${userName}`);
}

//After
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
  }

// 1.6 Object Destructuring

// before

const user={name:"dinod",age:2}
console.log(user.name);
console.log(user.age);

// Aftrer

const user={name:"dinod",age:2}
const {name,age} = user
console.log(name);


//1.7 Declarative Code

//before

const numbers = [1, 2, 3];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled);

//After
const numbers = [1, 2, 3];
const doubled = numbers.map((n)=>n*2)
console.log(doubled);

// 1.8 Factory Pattern

// Before (repeating object creation)

const user1 = { name: "A", role: "admin" };
const user2 = { name: "B", role: "user" };

//After

function createUser(name,role){
    return {name,role}
}

// 1.9 Strategy Pattern

//Before (lots of if/else logic)

function calc(type, a, b) {
    if (type === "add") return a + b;
    if (type === "mult") return a * b;
  }

//After

const strategies = {
    add: (a, b) => a + b,
    mult: (a, b) => a * b
  };

function calc(type, a, b) {
return strategies[type](a, b);
}
