/* 
1. Accept strings
2. Return if not string
3. Create charObj
4. Loop through each character and return if not an alphanumeric character
5. Treat upper and lower case as different characters
6. Check if character key exist in the charObj, if it exist increment if not add key and set value to 1;
7. Create isAlphanumeric function
8. retun charObj
*/

function createCharCountObj(str){
    if(typeof(str) !== 'string'){
        return;
    }
    let charObj = {};
    for( let i = 0; i < str.length; i++){
        if(isAlphanumeric(str[i])){
            charObj[str[i]] = ++charObj[str[i]] || 1;
        }
    }
    return charObj;
}

function isAlphanumeric(char){
return (char.charCodeAt(0) >= "a".charCodeAt(0) && char.charCodeAt(0) <= "z".charCodeAt(0)) || (char.charCodeAt(0) >= "A".charCodeAt(0) && char.charCodeAt(0) <= "Z".charCodeAt(0)) || (char.charCodeAt(0) >= "0".charCodeAt(0) && char.charCodeAt(0) <= "9".charCodeAt(0));
}


console.log(createCharCountObj("The quick brown fox just over a lazy dog"));