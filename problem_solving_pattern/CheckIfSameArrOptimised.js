/* 
Write a code that takes in two arrays and return true of false if the if square of each individual item in the first one matches the item in the second array.
1. [1,2,2] and [1,4,4]
2. [1,1,3,4] and [16,1,9,1]
*/



function checkIfSameArrOptimised(arr1,arr2){
// 1. Check if the two arrays have the same length and return false if they don't
if(arr1.length !== arr2.length){
    return false;
}
//2. Create array frequency object
let arr1FrequencyObj = {}, arr2FrequencyObj= {};
//3. Populate the frequency object
for(let item of arr1){
    arr1FrequencyObj[item]= ++arr1FrequencyObj[item] || 1;
}

for(let item of arr2){
    arr2FrequencyObj[item]= ++arr2FrequencyObj[item] || 1;
}

for(let key in arr1FrequencyObj ){
    if(!(key ** 2 in arr2FrequencyObj)){
        return false;
    }
    if(arr1FrequencyObj[key] !== arr2FrequencyObj[key **2]){
        return false;
    }
}

return true; 
}


console.log(checkIfSameArrOptimised("[],[]","[],[]"));