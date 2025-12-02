// Node class represents each element in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Singly Linked List class
class SinglyLinkedList {
    constructor() {
        this.head = null;  // start of the list
        this.size = 0;     // keep track of size
    }

    // Add a node at the end
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Add a node at the beginning
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Insert at a specific position
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = new Node(value);
        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = newNode;
        newNode.next = current;
        this.size++;
    }

    // Remove node by value
    remove(value) {
        if (!this.head) return;

        // Remove head
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (!current) return; // not found

        previous.next = current.next;
        this.size--;
    }

    // Search for a value
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    // Print all nodes
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }

    // Get size of the list
    getSize() {
        return this.size;
    }
}

// Example usage:
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(15, 2);
list.print();
console.log("Size:", list.getSize()); 
list.remove(10);
list.print(); 
console.log("Search 15:", list.search(15)); 
console.log("Search 10:", list.search(10)); 
