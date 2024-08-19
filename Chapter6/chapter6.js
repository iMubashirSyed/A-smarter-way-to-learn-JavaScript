// Task 1
var a = 10;
console.log("The value of a is: "+a);
console.log("The value of ++a is: "+(++a));
console.log("Now the value of a is: "+a);
console.log("The value of a++ is: "+(a++));
console.log("Now the value of a is: "+a);
console.log("The value of --a is: "+(--a));
console.log("Now the value of a is: "+a);
console.log("The value of a-- is: "+(a--));
console.log("Now the value of a is: "+a);

// Task 2
var a2 = 2 , b=1;
var result;
result = --a2 - --b + ++b + b;
console.log("Result: "+result);

console.log("--a: "+(--a2)); // will decreament the value of a2 first then will assign it to the variable.
console.log("--a - --b: "+(--a2 - --b)); // decreamented value of a2 subtracted by the decremented value of b.
console.log("--a - --b + ++b: "+(--a2 - --b + ++b));
console.log("--a - --b + ++b + b--: "+(--a2 - --b + ++b + b--)); 

