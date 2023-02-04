// odd numbers in anonyums function

let arr=[15,18,17,19,5,7,6,4,3,8,9,1];
let even=arr.filter(n => n%2)
console.log(even);

//add array

const myarr = [5, 15, 45];

const sum = myarr.reduce((accumulator, value) => {
  return accumulator + value;
});

console.log(sum);

// prime number

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

//palindrome

let str = "ana";
let strReverse = str.split("").reverse().join("");
if (str === strReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}

//duplicate

var arr1 = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
 
    function removeDuplicates(arr1) {
        return arr1.filter((item,index)=> arr1.indexOf(item) === index);
    }
        console.log(removeDuplicates(arr1));

//ARROW FUNCTIONS

//Print odd numbers in an array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = arr.filter(num => num % 2 !== 0);
console.log(result);

//Sum of all numbers in an array

var arr = [1, 2, 3, 4, 5];
var result = arr.reduce((acc, num) => acc + num, 0);
console.log(result);


//Palindrome in an array

var arr = ['hello', 'level', 'world', 'pop', 'madam'];

var result = arr.filter(word => {
  return word === word.split('').reverse().join('');
});
console.log(result);


//Convert all the strings to title caps in a string array

var stringArray = ['hello world', 'this is a test', 'java script'];

var result = stringArray.map(str => str.replace(/\b\w/g, l => l.toUpperCase()));
console.log(result);

//Return all the prime numbers in an array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = arr.filter(num => {
  if (num === 1 || num === 0) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});
console.log(result);

