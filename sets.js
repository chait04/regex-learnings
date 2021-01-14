let reg = /cha[a-z]t/ //can be any char btwn a to z
reg = /ch[aty]it/ //can be an a,t,y
reg = /ch[^aty]it/ //cannot be a, t, y
reg = /ch[^aty]rr[yYu]/ //can not be any of a, t or y + can be y,Y,u
reg = /ch[a-zA-Z]i[yu0-9][0-9]/ //we can have as many char in character sets as we want

//Quantifiers : use {}
reg = /cha{2}it/ // a can be come two times
reg = /cha{0,3}it/ // a can be come 0 to 3 times

//Grouping - we use paranthesis for grouping ()
reg = /(cha){2}/
reg = /(cha){2}([0-9]i){3}/

let str = "chacha"
str = "chacha0i8i2i"


let result = reg.exec(str)

console.log(result);
