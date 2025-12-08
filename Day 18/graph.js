// ---------------------------
// Node class
// ---------------------------
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// ---------------------------
// Binary Tree class
// Insertion is done in level-order 
// to keep the tree complete.
// ---------------------------
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        // If tree is empty
        if (!this.root) {
            this.root = newNode;
            return;
        }

        // Level order traversal to insert
        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            // Try to insert on left
            if (!current.left) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }

            // Try to insert on right
            if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }
}

// ---------------------------
// Traversal Functions
// ---------------------------

// Inorder traversal (Left → Root → Right)
function inorder(node) {
    if (!node) return;
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
}

// Preorder traversal (Root → Left → Right)
function preorder(node) {
    if (!node) return;
    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
}

// Postorder traversal (Left → Right → Root)
function postorder(node) {
    if (!node) return;
    postorder(node.left);
    postorder(node.right);
    console.log(node.value);
}

// Level order traversal (Breadth-first search)
function levelOrder(root) {
    if (!root) return;

    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current.value);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
}

// ---------------------------
// Example usage
// ---------------------------
const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(3);
tree.insert(7);
tree.insert(15);
tree.insert(30);

console.log("Inorder Traversal:");
inorder(tree.root); 
// Expected: 3, 5, 7, 10, 15, 20, 30

console.log("\nPreorder Traversal:");
preorder(tree.root); 
// Expected: 10, 5, 3, 7, 20, 15, 30

console.log("\nPostorder Traversal:");
postorder(tree.root); 
// Expected: 3, 7, 5, 15, 30, 20, 10

console.log("\nLevel Order Traversal:");
levelOrder(tree.root); 
// Expected: 10, 5, 20, 3, 7, 15, 30
