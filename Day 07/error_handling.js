// try catch
try {
    const value = 1/0
    console.log(value);
} catch (error) {
    console.log(error.message);
}finally{
    console.log("Execution Successfully !✅");
}

//custom error hadnling
function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 0));
  } catch (e) {
    console.log(e.message);
  }

//debuggin

console.error("This is an error");
console.warn("This is a warning");
console.info("This is info");

let x = 10
debugger;
console.log(x);
console.log(20);
