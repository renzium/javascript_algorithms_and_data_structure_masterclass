/* 
Write a code that takes in two arrays and return true of false if the if square of each individual item in the first one matches the item in the second array.
1. [1,2,2] and [1,4,4]
2. [1,1,3,4] and [16,1,9,1]

*/




function checkIfSameArr(arr1,arr2){
    //Steps
    //1. Check if they have the same length, if they are not the same length return false
    if(arr1.length !== arr2.length){
        return false;
    }
    //2. Loop through each item in the first array and check if its square is an item in the second array if it does not exist return false
    for(let i = 0; i < arr1.length; i++){
        let itemIndex = arr2.indexOf(arr1[i] ** 2);
        if(itemIndex === -1){
            return false;
        }
        //3. If the item exist remove it the item from the second array to avoid repetition
        arr2.splice(itemIndex,1);
    }
    //4. Return true after the loop.
    return true;
}

console.log(checkIfSameArr([1,2,2],[4,1,4,]))