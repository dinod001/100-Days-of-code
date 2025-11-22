// =====================================
// 1. doubledNumber()
// =====================================
function doubledNumber(num) {
    const total = num.map(n => n * 2);
    console.log("Doubled:", total);
    return total;
  }
  
  // CALL the function
  doubledNumber([1, 2, 3, 4]);
  
  
  // =====================================
  // 2. filterNumber()
  // =====================================
  function filterNumber(num) {
    const filtered = num.filter(n => n > 10);
    console.log("Filtered (>10):", filtered);
    return filtered;
  }
  
  // CALL the function
  filterNumber([5, 12, 30, 8, 22]);
  
  
  // =====================================
  // 3. getTotal()
  // =====================================
  function getTotal(num) {
    const total = num.reduce((sum, n) => sum + n, 0);
    console.log("Total:", total);
    return total;
  }
  
  // CALL the function
  getTotal([10, 20, 5]);
  
  
  // =====================================
  // 4. getMinMax()
  // =====================================
  function getMinMax(num) {
    const max = num.reduce((max, n) => Math.max(max, n), -Infinity);
    const min = num.reduce((min, n) => Math.min(min, n), Infinity);
  
    console.log("Max:", max);
    console.log("Min:", min);
  
    return { min, max };
  }
  
  // CALL the function
  getMinMax([5, 12, 3, 100, 45]);
  
  
  // =====================================
  // 5. capitalize()
  // =====================================
  function capitalize(words) {
    const result = words.map(word =>
      word[0].toUpperCase() + word.slice(1)
    );
  
    console.log("Capitalized:", result);
    return result;
  }
  
  // CALL the function
  capitalize(["hello", "world", "javascript"]);
  