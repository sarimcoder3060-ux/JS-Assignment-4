//Chapter 10-11

//Question 1
var cityName = prompt("Enter Your City");
if (cityName == "karachi") {
    alert("Welcome to the city of lights")
}

//Question 2:
var gender = prompt("Enter Your Gender");
if (gender == "male") {
    alert("Welcome sir")
}else {
    alert("Welcome mam")
}

//Question 3:
var signal = prompt("Traffic signal");
if (signal== "red") {
    alert("must stop")
}else if(signal == "green" ) {
    alert("go")
}else if(signal == "yellow") {
    alert("ready to go")
}

//Question 4:
var fuelLitre = +prompt("Enter remaining fuel in car (in litres)");
if (fuelLitre < 0.25 ) {
    alert("Please refill the fuel in your car")
}

//Questipon 5:
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}    

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

//Question 6:
var totalNum = 300;
var obtNum  = 203;
var percentage = obtNum/totalNum * 100;

if (percentage >= 80) {
   document.writeln(" <h1>Mark Sheet </h1> <p> total numbar:",totalNum,"\n  <p> obtained numbar:",obtNum,"\n <p> percentsge:",percentage,"%\n <p> Grade:A-one \n <p> Remarks:Excellent  " )
}else if(percentage >= 70) {
   document.writeln(" <h1>Mark Sheet </h1> <p> total numbar:",totalNum,"\n  <p> obtained numbar:",obtNum,"\n <p> percentsge:",percentage,"%\n <p> Grade:A \n <p> Remarks:Good  " )
}else if(percentage >= 60) {
   document.writeln(" <h1>Mark Sheet </h1> <p> total numbar:",totalNum,"\n  <p> obtained numbar:",obtNum,"\n <p> percentsge:",percentage,"%\n <p> Grade:B \n <p> Remarks:Parhle bhai  " ) 
}else if(percentage > 60) {
   document.writeln(" <h1>Mark Sheet </h1> <p> total numbar:",totalNum,"\n  <p> obtained numbar:",obtNum,"\n <p> percentsge:",percentage,"%\n <p> Grade:Fail \n <p> Remarks:Pesa barbad  " ) 
}

//Question 7:
var secretNum = 8;
var userNum = +prompt("Guess the number betwwen 1 to 10");
if (userNum == secretNum) {
    alert("Bingo, Answer is correct!")
}else if (userNum + 1 == secretNum || userNum - 1 == secretNum ) {
    alert("Close enough to correct number")
}else {
    alert("Wrong")
}

//Question 8:
var Num = +prompt("Number to check");
var divi = Num % 3;
if (divi == 0){
    alert("it is divisible by 3")
}else {
    alert("it is not divisible by 3")
}

//Question 9:
var N = +prompt("Number to check even or odd");
var result = N % 2;
if (result == 0){
    alert("it is even number")
}else {
    alert("it is odd number")
}

//Question 11:
document.writeln("<h1>Question 11 <h1>")
var firstNum = +prompt("First Number")
var operation = prompt("Operation")
var secNum = +prompt("Second mnumber")

if (operation == "plus") {
    document.writeln(firstNum," + ",secNum," = ",firstNum + secNum)
}else if (operation == "minus") {
    document.writeln(firstNum," - ",secNum," = ",firstNum - secNum)
}else if (operation == "multiply") {
    document.writeln(firstNum," x ",secNum," = ",firstNum * secNum)
}else if (operation == "divide") {
    document.writeln(firstNum," / ",secNum," = ",firstNum / secNum)
}else if (operation == "modulus") {
    document.writeln(firstNum," % ",secNum," = ",firstNum % secNum)
}