class Queue {
    constructor(maxSize) {
        this.items = [];
        this.maxSize = maxSize;
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is full!");
            return;
        }
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    isFull() {
        return this.maxSize !== undefined && this.items.length >= this.maxSize;
    }
}

// Example:
const q = new Queue(5);
q.enqueue(10);
q.enqueue(20);
console.log(q.peek());     // 10
console.log(q.dequeue());  // 10
