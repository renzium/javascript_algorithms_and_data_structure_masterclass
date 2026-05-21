/*
Write a function which checks a two pair of strings are anagrams
*/



function anagrams(str1,str2){
    //1. Check if they are of equal length
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length !== str2.length){
        return false;
    }
    //2. Loop through str1 and check if for each item there exist a corresponding string in str2
    for(let i=0; i < str1.length; i++){
        //3. Find the index of the each item and return false if the index is -1;
        let strIndex = str2.indexOf(str1[i]);
        if(strIndex === -1){
            return false;
        }
        //4. Remove create a new string without that item and assign it to str2 to avoid repetion
        str2 = "".concat(str2.slice(0,strIndex),str2.slice(strIndex + 1) )

    }
    //5. Return true
    return true;
}

console.log(anagrams("Hello","HellO"));