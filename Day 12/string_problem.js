//1. Reverse a String

s = "Hello"
revered_s = s.split("").reverse().join("")
console.log(revered_s);

//2. check Palindrome
s = "madam"
revered_s = s.split("").reverse().join("")
is_palindrome = s == s.split("").reverse().join("")
console.log(is_palindrome);

//3. Count Vowels
let a = "education";
let vowels = "aeiouAEIOU";
let count = 0;

for (let c of a){
    if(vowels.includes(c)){
        count++
    }
}
console.log(count);

//4. Reverse Words in a String
let b = "hello world";
revered_b = b.split(" ").reverse().join(" ")
console.log(revered_b);


//5.Check Anagram
let s1 = "listen";
let s2 = "silent";
let isAnagram = s1.split("").sort().join("") == s2.split("").sort().join("");
console.log(isAnagram);

//6. Remove Duplicates from String
let c = "banana";
let result=""
for (s of c){
    if(!result.includes(s)){
        result+=s
    }
}
console.log(result);

//7. Count Character Frequency
let d = "hello";
let freq = {};
for (let c of d) {
    freq[c] = (freq[c] || 0) + 1;
}
console.log(freq); // { h: 1, e: 1, l: 2, o: 1 }


//8. Longest Word in a String
let e =  "I love programming";
let words = e.split(" ");
longest_word = words.reduce((a,b)=>(a.length > b.length ? a:b),"")
console.log(longest_word);

//9. Check if String Contains Only Digits

let f = "12345";
let isDigitOnly = /^\d+$/.test(f);
console.log(isDigitOnly); // true

//10. Convert String to Title Case
let g = "hello world";
let title = g.split(" ").map((w)=>w[0].toUpperCase()+w.slice(1)).join(" ")
console.log(title); 


