// ============================================
// ALGORITHMS IMPLEMENTATION
// ============================================

// SORTING ALGORITHMS
// ============================================

// Bubble Sort - Time: O(n²), Space: O(1)
function bubbleSort(arr) {
    const array = [...arr];
    const steps = [];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            steps.push({
                array: [...array],
                comparing: [j, j + 1],
                step: `Comparing ${array[j]} and ${array[j + 1]}`
            });

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                steps.push({
                    array: [...array],
                    swapped: [j, j + 1],
                    step: `Swapped ${array[j + 1]} and ${array[j]}`
                });
            }
        }
    }

    return { sorted: array, steps };
}

// Quick Sort - Time: O(n log n) avg, Space: O(log n)
function quickSort(arr, low = 0, high = arr.length - 1, steps = []) {
    if (low < high) {
        const pi = partition(arr, low, high, steps);
        quickSort(arr, low, pi - 1, steps);
        quickSort(arr, pi + 1, high, steps);
    }
    return { sorted: arr, steps };
}

function partition(arr, low, high, steps) {
    const pivot = arr[high];
    let i = low - 1;

    steps.push({
        array: [...arr],
        pivot: high,
        step: `Pivot: ${pivot}`
    });

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            steps.push({
                array: [...arr],
                swapped: [i, j],
                step: `Swapped ${arr[i]} and ${arr[j]}`
            });
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push({
        array: [...arr],
        swapped: [i + 1, high],
        step: `Placed pivot ${pivot} at position ${i + 1}`
    });

    return i + 1;
}

// Merge Sort - Time: O(n log n), Space: O(n)
function mergeSort(arr) {
    const steps = [];
    const sorted = mergeSortHelper([...arr], steps);
    return { sorted, steps };
}

function mergeSortHelper(arr, steps) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortHelper(arr.slice(0, mid), steps);
    const right = mergeSortHelper(arr.slice(mid), steps);

    const merged = merge(left, right, steps);
    return merged;
}

function merge(left, right, steps) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    const merged = result.concat(left.slice(i)).concat(right.slice(j));
    steps.push({
        array: merged,
        step: `Merged [${left}] and [${right}]`
    });

    return merged;
}

// Insertion Sort - Time: O(n²), Space: O(1)
function insertionSort(arr) {
    const array = [...arr];
    const steps = [];
    const n = array.length;

    for (let i = 1; i < n; i++) {
        const key = array[i];
        let j = i - 1;

        steps.push({
            array: [...array],
            current: i,
            step: `Inserting ${key}`
        });

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            steps.push({
                array: [...array],
                shifting: j + 1,
                step: `Shifting elements`
            });
        }
        array[j + 1] = key;
    }

    return { sorted: array, steps };
}

// Selection Sort - Time: O(n²), Space: O(1)
function selectionSort(arr) {
    const array = [...arr];
    const steps = [];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;

        for (let j = i + 1; j < n; j++) {
            steps.push({
                array: [...array],
                comparing: [minIdx, j],
                step: `Finding minimum from position ${i}`
            });

            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
            steps.push({
                array: [...array],
                swapped: [i, minIdx],
                step: `Swapped ${array[i]} and ${array[minIdx]}`
            });
        }
    }

    return { sorted: array, steps };
}

// SEARCHING ALGORITHMS
// ============================================

// Linear Search - Time: O(n), Space: O(1)
function linearSearch(arr, target) {
    const steps = [];

    for (let i = 0; i < arr.length; i++) {
        steps.push({
            index: i,
            value: arr[i],
            found: arr[i] === target,
            step: `Checking index ${i}: ${arr[i]} ${arr[i] === target ? '✓ Found!' : '✗'}`
        });

        if (arr[i] === target) {
            return { found: true, index: i, steps };
        }
    }

    return { found: false, index: -1, steps };
}

// Binary Search - Time: O(log n), Space: O(1)
function binarySearch(arr, target) {
    const steps = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        steps.push({
            left,
            right,
            mid,
            value: arr[mid],
            step: `Checking middle index ${mid}: ${arr[mid]}`
        });

        if (arr[mid] === target) {
            steps.push({
                found: true,
                index: mid,
                step: `✓ Found ${target} at index ${mid}!`
            });
            return { found: true, index: mid, steps };
        }

        if (arr[mid] < target) {
            left = mid + 1;
            steps.push({
                step: `${arr[mid]} < ${target}, search right half`
            });
        } else {
            right = mid - 1;
            steps.push({
                step: `${arr[mid]} > ${target}, search left half`
            });
        }
    }

    return { found: false, index: -1, steps };
}

// GRAPH ALGORITHMS
// ============================================

// Breadth-First Search (BFS)
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    const result = [];
    const steps = [];

    visited.add(start);

    while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);

        steps.push({
            current: vertex,
            queue: [...queue],
            visited: Array.from(visited),
            step: `Visiting ${vertex}`
        });

        const neighbors = graph.adjacencyList[vertex] || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                steps.push({
                    added: neighbor,
                    step: `Added ${neighbor} to queue`
                });
            }
        }
    }

    return { traversal: result, steps };
}

// Depth-First Search (DFS)
function dfs(graph, start, visited = new Set(), result = [], steps = []) {
    visited.add(start);
    result.push(start);

    steps.push({
        current: start,
        visited: Array.from(visited),
        step: `Visiting ${start}`
    });

    const neighbors = graph.adjacencyList[start] || [];
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited, result, steps);
        }
    }

    return { traversal: result, steps };
}

// TREE ALGORITHMS
// ============================================

// Level Order Traversal (BFS for trees)
function levelOrderTraversal(root) {
    if (!root) return { levels: [], steps: [] };

    const levels = [];
    const steps = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.value);

            steps.push({
                value: node.value,
                level: levels.length,
                step: `Visiting ${node.value} at level ${levels.length}`
            });

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        levels.push(currentLevel);
    }

    return { levels, steps };
}

// Calculate tree height
function calculateHeight(node) {
    if (!node) return -1;
    return 1 + Math.max(calculateHeight(node.left), calculateHeight(node.right));
}

// Check if tree is balanced
function isBalanced(root) {
    function checkHeight(node) {
        if (!node) return 0;

        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1;

        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight, rightHeight) + 1;
    }

    return checkHeight(root) !== -1;
}
