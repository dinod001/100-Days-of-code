class HashMap {
    constructor(size = 16) {
      this.size = size;
      this.buckets = Array.from({ length: size }, () => []);
    }
  
    // Simple hash function
    hash(key) {
      let hash = 0;
      const strKey = key.toString(); // convert to string
      for (let i = 0; i < strKey.length; i++) {
        hash += strKey.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    // Insert key-value pair
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      // Check if key already exists, update it
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
  
      // Key not found, add new
      bucket.push([key, value]);
    }
  
    // Get value by key
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
  
      return undefined; // not found
    }
  
    // Remove key-value pair
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
  
      return false; // not found
    }
  }
  
  // --------- Usage ----------
  const map = new HashMap();
  map.set("apple", 10);
  map.set("banana", 20);
  map.set("cat", 30);
  
  console.log(map.get("apple"));  // 10
  console.log(map.get("banana")); // 20
  console.log(map.get("dog"));    // undefined
  
  map.remove("banana");
  console.log(map.get("banana")); // undefined
  