const fs = require('fs');
const prompt = require('prompt-sync')()

console.log("What would you like to do")
console.log("A. Convert from Farenheight To Celsius")
console.log("B. Convert from Celsius To Farenheight ")
console.log("C. Figure out a Car Loan")
console.log("D. Quit")

const choice = prompt("You Choose: ")

if(choice == "A"){
    let temp = prompt("What is the temperature in Farenheight?")
    let F = Number(parseInt(temp))
    C = (F - 32) * (5/9)
    console.log("The temperature in Celsius is " + C + "°C")
}
if(choice == "B"){
    let temp = prompt("What is the temperature in Celsius?")
    let F = Number(parseInt(temp))
    C = (F  * (9/5)) + 32
    console.log("The temperature in Farenheight is " + C + "°F")
}
if(choice == "C"){
    let temp = prompt("What is the temperature in Farenheight?")
    let F = Number(parseInt(temp))
    C = (F - 32) * (5/9)
    console.log("The temperature in Celsius is " + C + "°C")
}
if(choice == "D"){
    let temp = prompt("What is the temperature in Farenheight?")
    let F = Number(parseInt(temp))
    C = (F - 32) * (5/9)
    console.log("The temperature in Celsius is " + C + "°C")
}
fs.readFile('text.txt', 'utf8', (err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})