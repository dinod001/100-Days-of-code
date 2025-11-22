// =========================
//        ARRAYS
// =========================

// 1. Create an array of 5 colors
let colors = ["red", "blue", "green", "yellow", "purple"];

// 2. Access the 3rd element
console.log(colors[2]);

// 3. Change the last element to "pink"
colors[colors.length - 1] = "pink";

// 4. Add "black" to the end
colors.push("black");

// 5. Remove the first element
colors.shift();


// =========================
//        OBJECTS
// =========================

let person = {
    name: "Alex",
    age: 21,
    city: "Toronto"
};

// Access object property
console.log(person.name);

// Add new property
person.country = "Sri Lanka";

// Print the whole object
console.log(person);

// Loop through object keys
for (let key in person) {
    console.log(key, person[key]);
}


// =========================
//        LOOPS
// =========================

// For loop (0 to 10)
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// While loop (countdown)
let x = 5;
while (x > 0) {
    console.log("Countdown:", x);
    x--;
}


// =========================
//        MAP
// =========================

let numbers = [10, 20, 30, 40, 50];

// Double all numbers
let doubled = numbers.map(n => n * 2);
console.log(doubled);


// =========================
//        FILTER
// =========================

// Filter numbers greater than 10
let filtered = numbers.filter(n => n > 10);
console.log(filtered);


// =========================
//        REDUCE
// =========================

// Sum all numbers
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);
