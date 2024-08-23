// Task 1
var city = prompt("Enter yor city:");
if (city == "Karachi"){
    document.write("Welcome to the City of lights");
}

// Task 2
var gender = prompt("Enter yor gender:");
if(gender == "Male"){
    document.write("Welcome Sir");
}
else{
    document.write("Welcome Ma'am");
}

// Task 3
var color = prompt("Enter the color of signal light:");
if (color == "Red"){
    document.write("Must Stop");
}
else if (color == "Yellow"){
    document.write("Ready to move");
}
else{
    document.write("Move now");
}

// Task 4
var fuel = prompt("Enter the fuel of your car");
if (fuel <=0.25){
    document.write("Please refill your car");
}

// Task 5
var a = 4;
 if(++a === 5){
     alert("Given condition for variable is true!")
 }

 var b = 82;
 if(b++ === 83){
    alert("Given condition for variable is true!")
}

var c = 12;
if(c++ === 13){
    alert("Condition 1 is true!")
}

if(c === 13){
    alert("Condition 2 is true!")
}

if(++c < 14){
    alert("Condition 3 is true!")
}

if(c === 14){
    alert("Condition 4 is true!")
}

var materialCost = 20000;
var labourCost = 2000;
var totalCost = labourCost + materialCost;

if( totalCost === labourCost+materialCost){
    alert("The cost equal.")
}

if (true){
    alert("True")
}

if (false){
    alert("False")
}

if("car"<"cat"){
    alert("Car is smaller than cat");
}

// Task 6
var totalMarks = prompt("Enter total marks");
var marksObtained = prompt("Enter marks obtained");
var per = (marksObtained/totalMarks)*100;
var grade;
var remarks;

if (per >= 80){
    grade = "A-one";
    remarks = "Excellent";
}
else if (per >=70){
    grade = "A";
    remarks = "Good";
}
else if (per >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else{
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total marks: "+totalMarks);
document.write("<br>Marks obtained: "+marksObtained);
document.write("<br>Percentage: "+per);
document.write("<br>Grade: "+grade);
document.write("<br>Remarks: "+remarks);

// Task 7

let secretNumber = Math.floor(Math.random() * 10) + 1;


let userGuess = prompt("Guess the secret number (between 1 and 10):");


if (parseInt(userGuess) === secretNumber) {
    alert("Congratulations! Correct answer.");

} else if (parseInt(++userGuess) === secretNumber) {
    alert("Close enough Correct answer." + secretNumber);

} else {
    alert("Sorry, the correct number was " + secretNumber);
}


// Task 8
var num = prompt("Enter a number");
if (num%3 == 0) {
    document.write("Number is divisible by 3");
}

// task 9
var num2 = prompt("Enter a number");
if (num2 % 2 == 0){
    document.write("Number is even");
}
else{
    document.write("Number is odd");
}

// tassk 10
var temp = prompt("Enter temperature: ");
if( temp > 40){
    document.write("Its too hot outside");
}
else if (temp > 30){
    document.write("The Weather today is Normal");
}
else if (temp > 20){
    document.write("Today's weather is cool");
}
else{
    document.write("OMG! Today's weather is cool");
}

// task 11
var num3 = prompt("Enter first number");
var num4 = prompt("Enter second number");
var operation = prompt("Enter operation to perform");

if( operation == "+"){
    document.write(num3+"+"+num4+"="+num3+num4);
}
else if( operation == "-" ){
    document.write(num3+"-"+num4+"="+num3-num4);
}   
else if( operation == "*"){
    document.write(num3+"*"+num4+"="+num3*num4);
}
else if (operation== "/"){
    document.write(num3+"/"+num4+"="+num3/num4);
}
else if (operation == "%"){
    document.write(num3+"%"+num4+"="+num3%num4);
}


