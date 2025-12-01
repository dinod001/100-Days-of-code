class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Adding at end
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // Removing last element
    pop() {
        if (this.length === 0) return undefined;

        const last = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return last;
    }

    // Insert element at ANY position
    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.log("Index out of range");
            return;
        }

        // shift right
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[index] = value;
        this.length++;

        return this.length;
    }

    // Delete from any position
    delete(index) {
        if (index < 0 || index >= this.length) {
            console.log("Index out of range");
            return;
        }

        // shift left
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }

    // Access element
    get(index) {
        return this.data[index];
    }

    // Search for element
    search(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === value) {
                console.log(`${value} found at index ${i}`);
                return i;
            }
        }
        console.log("Not found");
        return -1;
    }
}


const arr = new MyArray();

arr.push("Hello");
arr.push("World");
arr.push("!");

console.log(arr);

// search
arr.search("World");

// insert at random place
arr.insert(1, "Inserted");
console.log(arr);

// delete random place
arr.delete(2);
console.log(arr);

// access
console.log(arr.get(1));
