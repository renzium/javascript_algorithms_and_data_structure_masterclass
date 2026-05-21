/*
Write a function which checks a two pair of strings are anagrams
*/



function anagramsOptimised(str1,str2){
    //1. Return false if they are not of equal length
    if(str1.length !== str2.length){
        return false;
    }
    //2. Create charact frequency object
    let str1Obj = {}, str2Obj = {};
    
    //3. Populate the object
    for(let i = 0; i < str1.length; i++){
        str1Obj[str1[i]] = ++str1Obj[str1[i]] || 1;
    }
    for(let i = 0; i < str2.length; i++){
        str2Obj[str2[i]] = ++str2Obj[str2[i]] || 1;
    }

    //4. loop through upject key
    for(let key in str1Obj){
        //5. Return  false if a key in one of the object is not there.
        if(!(key in str2Obj)){
            return false;
        }
        //6. Return false if the value of a key in on object is not the same as the other.
        if(str1Obj[key] !== str2Obj[key]){
            return false;
        }
    }
    return true;
}

console.log(anagramsOptimised("hello", "helol"));