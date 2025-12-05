const numbers=[1,2,3,4,5,6,7,8,9,10];

//linear search
let target = 7
let found = false;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===target){
        console.log(`${target} found at index ${i}`);
        found = true;
        break;
    }
}
if(!found){
    console.log(`${target} not found`);
}

//binary search
let left = 0;
let right = numbers.length - 1;
while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(numbers[mid]===target){
        console.log(`${target} found at index ${mid}`);
        break;
    }
    if(numbers[mid]<target){
        left = mid + 1;
    }
    else{
        right = mid - 1;
    }
}
if(!found){
    console.log(`${target} not found`);
}