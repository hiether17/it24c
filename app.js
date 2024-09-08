// Data Types

let num = 15;
let string = "Hello Lord";
let isActive = true;

console.log ("Data Types:");
console.log ("Number:",num);
console.log("String:",string);
console.log("Boolean:",isActive);
console.log ("----------------------------------------");

//Arithmetic and Logical Operators

let x = 10;
let y = 3;

console.log("\nArithmetic Operators");
console.log("Addition;", x+y);
console.log("Subtraction;", x-y);
console.log("Multiplication;", x*y);
console.log("Division;", x/y);
console.log("Modulos;", x%y);
console.log("----------------------------------------------");

// Logical Operators

console.log("\nLogical Operators:");
console.log("x>y && x != y;", x>y & x!= y);
console.log("x>y || x == y:", x>y || x == y);
console.log("!(x>y):",!(x>y));
console.log("-----------------------------------------------");

//Conditional Statement


console.log("\nConditional Statement:");

//if else

let age =17;
if(age >=18){
    console.log("You are an adult");
}else {
    console.log("You are a minor");
}
console.log("-----------------------------------------------");

//Switch

let Greetings = 4;
 
switch (Greetings){
    case 1:
        console.log("Hi");
        break;
    case 2:
        console.log("Hello");
        break;
    case 3:
        console.log("Good morning");
        break;
    case 4:
        console.log("Good afternoon");
        break;
    default:
        console.log("kapoy na");                
}
console.log("--------------------------------------------------------");

//Loops
//While Loop

let count = 0;
while (count <10){
    console.log(count);
    count++;
}
console.log("---------------------------------------------------------");

//Functioning Programming

function isOddorEven(number){
    return number %2 === 0? "Even" : "Odd";
}
console.log("\nOddorEven:");
console.log("Number 15 is", isOddorEven(15));
console.log("Number 5 is", isOddorEven(5));
console.log("----------------------------------------------------------");

//Determine is a number is a Prime number

 function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false;
    }
    return true;
 }
 console.log("\nPrime Check:");
 console.log("Number 17 is", isPrime(17)? "Prime" : "Not Prime");
 console.log("Number 6 is", isPrime(6)? "Prime" : " Not Prime");
 console.log("----------------------------------------------------------------");

 //Determine if a string is a palindrome

 function isPalindrome(str) {
let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//Check is the cleaned string is equal to its reverse
let reversedStr = cleanedStr.split("").reverse().join("");
return cleanedStr == reversedStr;
 }
 console.log("---------------------------------------------------------------------");

 console.log("\nPalindrome Check");
 console.log('"a man, a plan, a canal:Panama! " is', isPalindrome("a man, a plan, a canal:Palindrome!")? "A Palindrome" : "Not a Palindrome");
 console.log('"Hello" is', isPalindrome("Hello")? "A Palindrome" : "Not a Palindrome");
 