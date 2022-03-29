// 1 Prime numbers
// Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered from the old array.
// Note: if looping is needed, use only primitive for loop ( forearch, map, etc are not allowed).

function sort_prime(num) {

   var prime_num1 = [],
       prime_num2 = [];
   for (var i = 0; i <= num; i++) {
     prime_num2.push(true);
   }
   for (var i = 2; i <= num; i++) {
     if (prime_num2[i]) {
       prime_num1.push(i);
       for (var j = 1; i * j <= num; j++) {
         prime_num2[i * j] = false;
       }
     }
   }
 
   return prime_num1;
 }
 
 console.log(sort_prime(5))
//    Palindrome
//    Write a function that takes a string and returns true/false based on whether it is a palindrome or not (you can use a dictionary to know what a palyndrom is)
   

   function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   palindrome("A man, a plan, a canal. Panama");
   

//    Arrays & Objects

//    Prime numbers
// Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered from the old array.

const filterPrimes = array => {
    const isPrime = n => {
     for (let i = 2; i < n; i++) if (n % i === 0) return false;
     return n > 1;
    }
    return array.filter(number => isPrime(number));
   }

//    Array reversing
//    Write a Javascript function that takes an array of numbers and return a reversed version
   
   
   const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]

// 3 Inplace Array reversing
// Write a Javascript function that takes an array of numbers and return a reversed version. Note: here you are not allowed to use an intermediary array. You need to use the same array passed in the parameter and just reverse its content. Do not use inbuilt functions like reverse(). Just use loops and conditions.


Reverse = function(num) {
   var reversed_number = 0;
   while (num != 0) {
   reversed_number *= 10;
   reversed_number += number % 10;
   num -= num % 10;
   num /= 10;
   }
   return reversed_number;
   }
   // Write a function that takes a formatted array. The array is made of a string of people’s identities in a predefined format, 
   // “first-name second-name, age” . Ex “Patrick wyne, 30”

   const firstName = 'Patrick';
const lastName = 'Wyne';
const age=30;

const output = [`name: ${firstName}, surname: ${lastName},age:${age}`]


// Custom sorting
// Write a function that sorts an array in a descending order. The exception is that if it encounters a prime number, it should erase it from the array. 

// Note: this should be entirely from scratch no inbuilt sorting functions allowed.



// Note: no String function or processing is allowed. 
// Only use raw mathematical operations, loops and conditional statements. 




var arr =[1, 2, 3, 4, 5];
for (var i = arr.length - 1; i >= 0; i--) {
console.log(arr[i]);
}



// Time complexity


// [Optiona] We would like to know if a particular array contains a majority element. An array has a majority element if there is at least one element that counts more than half of the size. 


	
	function _binarySearch(arr, low, high, x)
	{
		if (high >= low) {
			let mid = parseInt((low + high) / 2, 10);
			
			if ((mid == 0 || x > arr[mid - 1]) && (arr[mid] == x))
				return mid;
			else if (x > arr[mid])
				return _binarySearch(arr, (mid + 1), high, x);
			else
				return _binarySearch(arr, low, (mid - 1), x);
		}

		return -1;
	}

	
	function isMajority(arr, n, x)
	{
		
	
		let i = _binarySearch(arr, 0, n - 1, x);

		
		if (i == -1)
			return false;

	
		if (((i + parseInt(n / 2, 10)) <= (n - 1)) && arr[i + parseInt(n / 2, 10)] == x)
			return true;
		else
			return false;
	}
	
	let arr = [ 1, 2, 3, 3, 3, 3, 10 ];
	let n = arr.length;
	let x = 3;
	if (isMajority(arr, n, x) == true)
	document.write(x + " appears more than " + parseInt(n / 2, 10) + " times in arr[]");
	else
	document.write(x + " does not appear more than " + parseInt(n / 2, 10) + " times in arr[]");
	

   
