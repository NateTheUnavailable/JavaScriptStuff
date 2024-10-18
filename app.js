const fs = require('fs');
const prompt = require('prompt-sync')()

console.log("What would you like to do")
console.log("A. Convert from Farenheight To Celsius")
console.log("B. Convert from Celsius To Farenheight ")
console.log("C. Figure out a Car Loan")
console.log("D. Figure out the smallest number")
console.log("E. Figure out the largest number")
console.log("F. Read From Text File")
console.log("G. Figure out a Car Loan")
console.log("H. Quit")

const choice = prompt("You Choose: ")

if(choice == "A" || choice == "a" ){
    let temp = prompt("What is the temperature in Farenheight?")
    let F = Number(parseInt(temp))
    C = (F - 32) * (5/9)
    console.log("The temperature in Celsius is " + C + "°C")
}
if(choice == "B" || choice == "b"){
    let temp = prompt("What is the temperature in Celsius?")
    let F = Number(parseInt(temp))
    C = (F  * (9/5)) + 32
    console.log("The temperature in Farenheight is " + C + "°F")
}
if(choice == "C" || choice == "c"){
    let temp = prompt("What is the temperature in Farenheight?")
    let F = Number(parseInt(temp))
    C = (F - 32) * (5/9)
    console.log("The temperature in Celsius is " + C + "°C")
}
if(choice == "D" || choice == "d"){
    let targetNumber = 6
    let sum = [];
    let count = 0;
    while (count < targetNumber) {
        let input = prompt("Enter a number:");
      
        // Check if the input is a number
        if (!isNaN(input)) {
          let number = parseInt(input);
          sum.push(number);
          sum.sort(function(a, b){return a - b});
          count++;
        } 
        else {
          alert("Please enter a valid number.");
        }
      }
      const min = sum[0];
      console.log("the minimum number inputed is " + min)
}
if(choice == "E" || choice == "e"){
    let targetNumber = 6
    let sum = [];
    let count = 0;
    while (count < targetNumber) {
        let input = prompt("Enter a number:");
      
        // Check if the input is a number
        if (!isNaN(input)) {
          let number = parseInt(input);
          sum.push(number);
          sum.sort(function(a, b){return a - b});
          count++;
        } 
        else {
          alert("Please enter a valid number.");
        }
      }
      const max = sum[5];
      console.log("the minimum number inputed is " + max)
}
if(choice == "F" || choice == "f"){
    fs.readFile('text.txt', 'utf8', (err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})
}
if(choice == "G" || choice == "g"){
    let input1 = prompt("Loan Amount: $	");
    let input2 = prompt("Loan Term In Months: ");
    let input3 = prompt("Interest Rate: %");
    let loan = parseInt(input1);
    let month = parseInt(input2);
    let rate = parseInt(input3/100);
    let total = (loan * (1 + rate)) / month
    console.log("You have to pay $" + total + " every month")
}
if(choice == "H" || choice == "h"){
    console.log('Terminated');
}