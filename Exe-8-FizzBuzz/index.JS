/*  Fizz Buzz game,  we want an array which includes 1 and end at 100.this array must shows all the number in order in a way that the number divisible by 3 replaced by Fizz
and the number divisible by 5 replaced by Buzz  and the number divisible by 3 & 5 replace by FizzBuzz. */


/* solution */

var output = [];
var count= 1;

function fizzBuzz(){
while ( count <= 100) {
if (count % 3 ===0 && count % 5===0 ){
    output.push("fizzBuzz");
} else if (count % 3 ===0){
    output.push("Fizz")
} else if (count % 5 ===0) {
    output.push("Buzz");
}
 else{
    output.push(count);
}

count++;
}
    console.log(output);
}
