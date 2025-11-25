// Source - https://stackoverflow.com/q
// Posted by al feratovic
// Retrieved 2025-11-25, License - CC BY-SA 4.0

// This class takes a name string and greeting string in
// the constructor. Here are some examples of how this should work:
//
// g = new Greeter()
// g.greet() # => "Hello, Anonymous!"
//
// g = new Greeter("What's up", "Dog")
// g.greet() # => "What's up, Dog!"
//
// g = new Greeter("Hola")
// g.greet() # => "Hola, Anonymous!"
 
// Unfortunately, this code isn't quite working.
// Can you spot at least 2 bugs?
 
class Greeter {
    constructor(name, greeting) {
      this.name = name;
      this.greeting = greeting;
    }
      
    greet() {
      let name = this.name;
      let greeting = this.greeting; //cannot assign to const varibale since later this going to chnage
      
      if (!name) {
        name = "Anonymous";
      }
      if (greeting == undefined) { //assignmet mark is wrong = it should be ==
        greeting = "Hello";
      }
      
      return `${name}, ${greeting}` ; // $ should be withing the `` marks
    }
  }
   
//g = new Greeter(name="dinod","Welcome")
g = new Greeter()
console.log(g.greet());

  