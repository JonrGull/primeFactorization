"use strict";
// Please don't delete the 'use strict' line above

/*
 * @param {number} ???
 * @returns {{ [primeFactor: number]: number }} an object whose values are the prime factors of the given number and whose values are the exponents of the corresponding prime factors
 */

// Prime Factorization

/*Pseudo code: 
Result - we want objects that factorizes prime numbers and how many times they occur. 
We need an empty object to place all the values along with the return count.
Lastly, we need a divider, which starts at 2 and increases each loop. The divider is 2 because it is the smallest prime number. 
Each time, the divider increases 2,3,4,5, etc. and then divides the remaining number and will only return if it dividing by a prime number.



PRESENTATION ////////////////////////

1. First check if entered number is a number, and that it is greater or equal to '1.' '1' is not a prime number, so it should return an error.
2. Now that it has passed the first check, start a while loop. While loops continue until it has finish factoring. For loop would be difficult here because each
loop runs a different amount of times.
3. It starts at 2, and checks if the entered number is divisible by 2, if so, it divides by 2 and divider is reset at 2. If it's not divisible by 2, it adds one and continues tries to divide by that value.
4. It once again checks if the divided number can divided by 2, if not, it keeps going and checking to see if it can divide by a prime number.
5. This continues until it reaches that value of the current number, or has output all the prime factors.




SMALL EXAMPLE --> 20

20 / 2 --> PASS - 10 is our remainder
10 / 2 --> PASS - 5 is our remainder
5 / 2 --> FAIL
5 / 3 --> FAIL
5 / 4 --> FAIL
5 / 5 --> PASS!

return is {2:2, 5:1}

/////////////////////
A bigger example 9999
It can't divide by 2, so it checks 3. 
9999 / 3 = 3333
3333 / 2 --> FAIL
3333/ 3 --> PASS
1111 / 2 --> FAIL
1111 / 3 --> FAIL
......
1111 / 11 --> PASS
101 / 2 --> FAIL
...
101 / 101 --> PASS 

return {3:2, 11:1, 101: 1}

*/

//The magic
function primeFactorization() {
  let inputNumber = document.getElementById("factor").value || 0;
  let resultObject = {};
  let divider = 2;

  if (inputNumber <= 1 || inputNumber % 1 != 0) {
    return (document.getElementById("result").innerHTML = JSON.stringify(
      "Please enter a positive, whole number that is greater than 1"
    ));
  } else {
    while (inputNumber >= 2) {
      if (inputNumber % divider == 0) {
        resultObject[divider] = 1 + (resultObject[divider] || 0);
        inputNumber = inputNumber / divider;
      } else {
        divider++;
      }
    }
    console.log(resultObject);

    return (document.getElementById("result").innerHTML =
      JSON.stringify(resultObject));
  }
}

//Random Number
function randomNumber() {
  let randomResult = Math.floor(Math.random() * 10000) + 1;
  return (document.getElementById("factor").value =
    JSON.stringify(randomResult));
}

//TESTS
// let actual;
// let expected;

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// test(
//   primeFactorization(1),
//   "Please enter a number that is positive and larger than '1'."
// );
// test(
//   primeFactorization(-937),
//   "Please enter a number that is positive and larger than '1'."
// );
// test(primeFactorization(2), { 2: 1 });
// test(primeFactorization(3), { 3: 1 });
// test(primeFactorization(4), { 2: 2 });
// test(primeFactorization(5), { 5: 1 });
// test(primeFactorization(6), { 2: 1, 3: 1 });
// test(primeFactorization(20), { 2: 2, 5: 1 });
// test(primeFactorization(9999), { 3: 2, 11: 1, 101: 1 });
// test(primeFactorization(200560490130), {
//   2: 1,
//   3: 1,
//   5: 1,
//   7: 1,
//   11: 1,
//   13: 1,
//   17: 1,
//   19: 1,
//   23: 1,
//   29: 1,
//   31: 1,
// });
// test(primeFactorization(900719925474099), {
//   3: 1,
//   53: 1,
//   157: 1,
//   1613: 1,
//   2731: 1,
//   8191: 1,
// });

// IF WE WANTED TO FIX THE BUTTON
// <id = "btnFactor" button onclick="primeFactorization()">Factorize</id>
// const btnFactor = document.querySelector('#btnFactor');
// btnFactor.addEventListener('click',primeFactorization);
