class Stack {
    constructor(maxSize) {
        this.items = [];
        this.maxSize = maxSize; // optional limit
    }

    // Add element to stack
    push(element) {
        if (this.isFull()) {
            console.log("Stack is full!");
            return;
        }
        this.items.push(element);
    }

    // Remove and return top element
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        return this.items.pop();
    }

    // Return top element without removing
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Check if stack is full (when maxSize is provided)
    isFull() {
        return this.maxSize !== undefined && this.items.length >= this.maxSize;
    }
}

// Example Usage:
const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());   // 30
console.log(stack.pop());    // 30
console.log(stack.isEmpty()); // false
console.log(stack.isFull());  // false
