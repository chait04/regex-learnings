// let reg = /chait/g; //This is regular expression

// console.log(reg);
// console.log(reg.source)//IT will print what inside the red expression

//Functions to match expressions
// let s = "learning regex Chait and chait or chait"
// function to match expression
//exec() 

// let results = reg.exec(s)
// console.log(results);
// console.log(results.input);
// console.log(results.index);

// let results2 = reg.test(s)
// console.log(results2);

//3. match() = It will return an arrayof results or null
//let result3 = reg

// let results3 = s.match(reg)
// console.log(results3);

//4. search() . return index of first match else -1

// let result5 = s.search(reg)
// console.log(result5);

//5. replace - returns new replaced string.. it will replace first matching string with your given input
//we can change flag to "g" if u want to change every repeating word
// let result6 = s.replace(reg, "bhushan")
// console.log(result6);

// ==================
//  Second Part 
// ==================
console.log("Hello World");

let regex = /chait/
regex = /^chait/ //^ means expression will amtch if string starts with given regex
regex = /chait$/ //$ means expression ends with given regex string 
regex = /cha.t/ // . matches any one character
regex = /cha*t/ // . matches any zero or more characters

const str = "chait is a good boy .chait earns 2m$ at  20"

let result = regex.exec(str)
console.log("The result from exec is",result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}

