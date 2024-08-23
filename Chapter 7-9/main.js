// // Task 1
var name1 = prompt("Enter your name: ");
document.write("Good Morning " + name1 + "<br>");

// // Task 2

var table;
var num = prompt("Enter a number");;
if (isNaN(num) || num === 0) {
    table = 5;
}
else {
    table = num;
}
for (var i = 1; i < 11; i++) {
    document.write(table + "x" + i + "=" + table * i + "<br>");
}

// Task 3
var totalMarks = 100;
var obt1 = prompt("Enter marks of subject 1:");
var obt2 = prompt("Enter marks of subject 2:");
var obt3 = prompt("Enter marks of subject 3:");
var per1 = (obt1 / totalMarks) * 100;
var per2 = (obt2 / totalMarks) * 100;
var per3 = (obt3 / totalMarks) * 100;

document.write("<table>");
document.write('<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentages</th></tr>');
document.write("<tr><td>English</td><td>" + totalMarks + "</td><td>" + obt1 + "</td><td>" + per1 + "</td>");
document.write("<tr><td>Math</td><td>" + totalMarks + "</td><td>" + obt2 + "</td><td>" + per2 + "</td>");
document.write("<tr><td>Urdu</td><td>" + totalMarks + "</td><td>" + obt3 + "</td><td>" + per3 + "</td>");

