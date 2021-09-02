/* 
Falsy:
false
0
empty string
undifind
null
NaN
-----------------

truly:
true
any number(positive/negative)
any string inculding single whitespace,"0"
[]empty array
{}

*/

const x = -1;
if(x){
    console.log("variable is truly")
}
else{
    console.log('variable is falsy')
}