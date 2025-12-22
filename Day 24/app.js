// ============================================
// APPLICATION CONTROLLER
// ============================================

// Initialize data structures
let stack = new Stack();
let queue = new Queue();
let linkedList = new LinkedList();
let bst = new BinarySearchTree();
let graph = new Graph();
let hashMap = new HashMap();

// ============================================
// TAB NAVIGATION
// ============================================

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.dataset.category;

        // Update active tab
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update active section
        document.querySelectorAll('.category-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(category).classList.add('active');
    });
});

// ============================================
// VISUALIZATION HELPERS
// ============================================

function updateVisualization(elementId, items, type = 'default') {
    const viz = document.getElementById(elementId);
    viz.innerHTML = '';

    if (!items || items.length === 0) {
        viz.innerHTML = '<span style="color: var(--text-muted);">Empty</span>';
        return;
    }

    items.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'viz-item';
        itemEl.textContent = item;
        viz.appendChild(itemEl);

        if (index < items.length - 1 && type !== 'tree') {
            const arrow = document.createElement('span');
            arrow.className = 'viz-arrow';
            arrow.textContent = type === 'queue' ? '←' : '→';
            viz.appendChild(arrow);
        }
    });
}

function updateOutput(elementId, message, append = false) {
    const output = document.getElementById(elementId);
    const line = document.createElement('div');
    line.className = 'output-line';
    line.textContent = message;

    if (!append) {
        output.innerHTML = '';
    }
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// ============================================
// STACK OPERATIONS
// ============================================

function stackPush() {
    const input = document.getElementById('stack-input');
    const value = input.value.trim();

    if (!value) {
        updateOutput('stack-output', '❌ Please enter a value');
        return;
    }

    stack.push(value);
    updateVisualization('stack-viz', stack.toArray());
    updateOutput('stack-output', `✓ Pushed: ${value} | Size: ${stack.size()}`);
    input.value = '';
}

function stackPop() {
    const value = stack.pop();
    updateVisualization('stack-viz', stack.toArray());
    updateOutput('stack-output',
        typeof value === 'string' && value.includes('empty')
            ? `❌ ${value}`
            : `✓ Popped: ${value} | Size: ${stack.size()}`
    );
}

function stackPeek() {
    const value = stack.peek();
    updateOutput('stack-output',
        typeof value === 'string' && value.includes('empty')
            ? `❌ ${value}`
            : `👁️ Top element: ${value}`
    );
}

// ============================================
// QUEUE OPERATIONS
// ============================================

function queueEnqueue() {
    const input = document.getElementById('queue-input');
    const value = input.value.trim();

    if (!value) {
        updateOutput('queue-output', '❌ Please enter a value');
        return;
    }

    queue.enqueue(value);
    updateVisualization('queue-viz', queue.toArray(), 'queue');
    updateOutput('queue-output', `✓ Enqueued: ${value} | Size: ${queue.size()}`);
    input.value = '';
}

function queueDequeue() {
    const value = queue.dequeue();
    updateVisualization('queue-viz', queue.toArray(), 'queue');
    updateOutput('queue-output',
        typeof value === 'string' && value.includes('empty')
            ? `❌ ${value}`
            : `✓ Dequeued: ${value} | Size: ${queue.size()}`
    );
}

function queueFront() {
    const value = queue.front();
    updateOutput('queue-output',
        typeof value === 'string' && value.includes('empty')
            ? `❌ ${value}`
            : `👁️ Front element: ${value}`
    );
}

// ============================================
// LINKED LIST OPERATIONS
// ============================================

function listAppend() {
    const input = document.getElementById('list-input');
    const value = input.value.trim();

    if (!value) {
        updateOutput('list-output', '❌ Please enter a value');
        return;
    }

    linkedList.append(value);
    updateVisualization('list-viz', linkedList.toArray());
    updateOutput('list-output', `✓ Appended: ${value} | Size: ${linkedList.getSize()}`);
    input.value = '';
}

function listPrepend() {
    const input = document.getElementById('list-input');
    const value = input.value.trim();

    if (!value) {
        updateOutput('list-output', '❌ Please enter a value');
        return;
    }

    linkedList.prepend(value);
    updateVisualization('list-viz', linkedList.toArray());
    updateOutput('list-output', `✓ Prepended: ${value} | Size: ${linkedList.getSize()}`);
    input.value = '';
}

function listReverse() {
    linkedList.reverse();
    updateVisualization('list-viz', linkedList.toArray());
    updateOutput('list-output', `✓ List reversed! | Size: ${linkedList.getSize()}`);
}

// ============================================
// BST OPERATIONS
// ============================================

function bstInsert() {
    const input = document.getElementById('bst-input');
    const value = parseInt(input.value);

    if (isNaN(value)) {
        updateOutput('bst-output', '❌ Please enter a valid number');
        return;
    }

    bst.insert(value);
    const inorder = bst.inorder();
    updateVisualization('bst-viz', inorder, 'tree');
    updateOutput('bst-output', `✓ Inserted: ${value} | Height: ${bst.height()}`);
    input.value = '';
}

function bstInorder() {
    const result = bst.inorder();
    if (result.length === 0) {
        updateOutput('bst-output', '❌ Tree is empty');
        return;
    }
    updateVisualization('bst-viz', result, 'tree');
    updateOutput('bst-output', `Inorder: [${result.join(', ')}]`);
}

function bstSearch() {
    const input = document.getElementById('bst-input');
    const value = parseInt(input.value);

    if (isNaN(value)) {
        updateOutput('bst-output', '❌ Please enter a valid number');
        return;
    }

    const found = bst.search(value);
    updateOutput('bst-output', found
        ? `✓ Found: ${value} exists in the tree`
        : `❌ Not found: ${value} does not exist`
    );
}

// ============================================
// GRAPH OPERATIONS
// ============================================

function graphAddVertex() {
    const input = document.getElementById('graph-vertex');
    const vertex = input.value.trim().toUpperCase();

    if (!vertex) {
        updateOutput('graph-output', '❌ Please enter a vertex');
        return;
    }

    graph.addVertex(vertex);
    updateGraphVisualization();
    updateOutput('graph-output', `✓ Added vertex: ${vertex}`);
    input.value = '';
}

function graphAddEdge() {
    const v1Input = document.getElementById('graph-vertex');
    const v2Input = document.getElementById('graph-edge');
    const v1 = v1Input.value.trim().toUpperCase();
    const v2 = v2Input.value.trim().toUpperCase();

    if (!v1 || !v2) {
        updateOutput('graph-output', '❌ Please enter both vertices');
        return;
    }

    graph.addEdge(v1, v2);
    updateGraphVisualization();
    updateOutput('graph-output', `✓ Added edge: ${v1} ↔️ ${v2}`);
    v1Input.value = '';
    v2Input.value = '';
}

function graphBFS() {
    const input = document.getElementById('graph-vertex');
    const start = input.value.trim().toUpperCase();

    if (!start || !graph.adjacencyList[start]) {
        updateOutput('graph-output', '❌ Please enter a valid start vertex');
        return;
    }

    const result = bfs(graph, start);
    updateOutput('graph-output', `BFS from ${start}: [${result.traversal.join(' → ')}]`, false);

    result.steps.forEach((step, index) => {
        setTimeout(() => {
            updateOutput('graph-output', `  ${step.step}`, true);
        }, index * 300);
    });
}

function updateGraphVisualization() {
    const viz = document.getElementById('graph-viz');
    const vertices = graph.getVertices();

    if (vertices.length === 0) {
        viz.innerHTML = '<span style="color: var(--text-muted);">No vertices</span>';
        return;
    }

    viz.innerHTML = '';
    vertices.forEach(vertex => {
        const edges = graph.getEdges(vertex);
        const vertexEl = document.createElement('div');
        vertexEl.className = 'viz-item';
        vertexEl.textContent = `${vertex}: [${edges.join(', ')}]`;
        viz.appendChild(vertexEl);
    });
}

// ============================================
// HASHMAP OPERATIONS
// ============================================

function hashSet() {
    const keyInput = document.getElementById('hash-key');
    const valueInput = document.getElementById('hash-value');
    const key = keyInput.value.trim();
    const value = valueInput.value.trim();

    if (!key || !value) {
        updateOutput('hash-output', '❌ Please enter both key and value');
        return;
    }

    hashMap.set(key, value);
    updateHashVisualization();
    updateOutput('hash-output', `✓ Set: ${key} = ${value}`);
    keyInput.value = '';
    valueInput.value = '';
}

function hashGet() {
    const keyInput = document.getElementById('hash-key');
    const key = keyInput.value.trim();

    if (!key) {
        updateOutput('hash-output', '❌ Please enter a key');
        return;
    }

    const value = hashMap.get(key);
    updateOutput('hash-output', value !== undefined
        ? `✓ ${key} = ${value}`
        : `❌ Key "${key}" not found`
    );
}

function hashKeys() {
    const keys = hashMap.keys();
    if (keys.length === 0) {
        updateOutput('hash-output', '❌ HashMap is empty');
        return;
    }
    updateOutput('hash-output', `Keys: [${keys.join(', ')}]`);
}

function updateHashVisualization() {
    const viz = document.getElementById('hash-viz');
    const keys = hashMap.keys();

    if (keys.length === 0) {
        viz.innerHTML = '<span style="color: var(--text-muted);">Empty</span>';
        return;
    }

    viz.innerHTML = '';
    keys.forEach(key => {
        const value = hashMap.get(key);
        const itemEl = document.createElement('div');
        itemEl.className = 'viz-item';
        itemEl.textContent = `${key}: ${value}`;
        viz.appendChild(itemEl);
    });
}

// ============================================
// SORTING ALGORITHMS
// ============================================

function runBubbleSort() {
    const input = document.getElementById('sort-input');
    const arr = parseArray(input.value);

    if (!arr) {
        updateOutput('sort-output', '❌ Invalid input. Use format: 5,3,8,1,9');
        return;
    }

    const result = bubbleSort(arr);
    animateSorting(result, 'Bubble Sort');
}

function runQuickSort() {
    const input = document.getElementById('sort-input');
    const arr = parseArray(input.value);

    if (!arr) {
        updateOutput('sort-output', '❌ Invalid input. Use format: 5,3,8,1,9');
        return;
    }

    const result = quickSort([...arr]);
    animateSorting(result, 'Quick Sort');
}

function runMergeSort() {
    const input = document.getElementById('sort-input');
    const arr = parseArray(input.value);

    if (!arr) {
        updateOutput('sort-output', '❌ Invalid input. Use format: 5,3,8,1,9');
        return;
    }

    const result = mergeSort(arr);
    animateSorting(result, 'Merge Sort');
}

function parseArray(str) {
    try {
        const arr = str.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        return arr.length > 0 ? arr : null;
    } catch {
        return null;
    }
}

function animateSorting(result, algorithm) {
    updateOutput('sort-output', `Running ${algorithm}...`, false);
    updateOutput('sort-output', `Original: [${result.steps[0]?.array.join(', ') || result.sorted.join(', ')}]`, true);

    let stepIndex = 0;
    const interval = setInterval(() => {
        if (stepIndex >= result.steps.length) {
            clearInterval(interval);
            updateOutput('sort-output', `✓ Sorted: [${result.sorted.join(', ')}]`, true);
            visualizeBars(result.sorted);
            return;
        }

        const step = result.steps[stepIndex];
        updateOutput('sort-output', `  ${step.step}`, true);
        visualizeBars(step.array, step.comparing, step.swapped);
        stepIndex++;
    }, 500);
}

function visualizeBars(arr, comparing = [], swapped = []) {
    const viz = document.getElementById('sort-viz');
    viz.innerHTML = '';

    const maxVal = Math.max(...arr);
    arr.forEach((val, index) => {
        const bar = document.createElement('div');
        bar.className = 'viz-bar';
        bar.style.height = `${(val / maxVal) * 120}px`;

        if (comparing.includes(index)) {
            bar.classList.add('comparing');
        }
        if (swapped.includes(index)) {
            bar.classList.add('swapping');
        }

        const label = document.createElement('div');
        label.textContent = val;
        label.style.textAlign = 'center';
        label.style.marginTop = '5px';

        const container = document.createElement('div');
        container.appendChild(bar);
        container.appendChild(label);
        viz.appendChild(container);
    });
}

// ============================================
// SEARCHING ALGORITHMS
// ============================================

function runLinearSearch() {
    const arrayInput = document.getElementById('search-array');
    const targetInput = document.getElementById('search-target');
    const arr = parseArray(arrayInput.value);
    const target = parseInt(targetInput.value);

    if (!arr || isNaN(target)) {
        updateOutput('search-output', '❌ Invalid input');
        return;
    }

    const result = linearSearch(arr, target);
    updateOutput('search-output', `Linear Search for ${target}:`, false);

    result.steps.forEach((step, index) => {
        setTimeout(() => {
            updateOutput('search-output', `  ${step.step}`, true);
        }, index * 300);
    });

    setTimeout(() => {
        if (result.found) {
            updateOutput('search-output', `✓ Found at index ${result.index}`, true);
        } else {
            updateOutput('search-output', `❌ Not found`, true);
        }
    }, result.steps.length * 300);
}

function runBinarySearch() {
    const arrayInput = document.getElementById('search-array');
    const targetInput = document.getElementById('search-target');
    const arr = parseArray(arrayInput.value);
    const target = parseInt(targetInput.value);

    if (!arr || isNaN(target)) {
        updateOutput('search-output', '❌ Invalid input');
        return;
    }

    // Sort array for binary search
    const sortedArr = [...arr].sort((a, b) => a - b);
    updateOutput('search-output', `Binary Search for ${target}:`, false);
    updateOutput('search-output', `  Sorted array: [${sortedArr.join(', ')}]`, true);

    const result = binarySearch(sortedArr, target);

    result.steps.forEach((step, index) => {
        setTimeout(() => {
            updateOutput('search-output', `  ${step.step}`, true);
        }, (index + 1) * 400);
    });
}

// ============================================
// GRAPH TRAVERSAL
// ============================================

function runBFS() {
    const input = document.getElementById('traversal-start');
    const start = input.value.trim().toUpperCase();

    if (!start || !graph.adjacencyList[start]) {
        updateOutput('traversal-output', '❌ Please enter a valid start vertex from the graph');
        return;
    }

    graphBFS(); // Reuse the graph BFS function
    // Update output element for traversal section
    const graphOutput = document.getElementById('graph-output').innerHTML;
    document.getElementById('traversal-output').innerHTML = graphOutput;
}

function runDFS() {
    const input = document.getElementById('traversal-start');
    const start = input.value.trim().toUpperCase();

    if (!start || !graph.adjacencyList[start]) {
        updateOutput('traversal-output', '❌ Please enter a valid start vertex from the graph');
        return;
    }

    const result = dfs(graph, start);
    updateOutput('traversal-output', `DFS from ${start}: [${result.traversal.join(' → ')}]`, false);

    result.steps.forEach((step, index) => {
        setTimeout(() => {
            updateOutput('traversal-output', `  ${step.step}`, true);
        }, index * 300);
    });
}

// ============================================
// INITIALIZE
// ============================================

console.log('🚀 DSA Helper Toolkit loaded successfully!');
console.log('💡 Tip: Open the console to see data structure internals');
