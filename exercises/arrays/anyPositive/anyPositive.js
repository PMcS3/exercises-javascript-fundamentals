/**
 * Given an array of numbers, returns true if _any_ element is positive
 * and false otherwise.
 *
 * @example
 * anyPositive([1, 2, 3, 4, 5]); // => true
 * anyPositive([1, 2, -3, 4, 5]); // => true
 * anyPositive([0, 0, 1]); // => true
 * anyPositive([-10, -10, -10]); // => false
 * anyPositive([-10, -10, 1]); // => true
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
let pennies = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let dimes = [10,10,-10];
let dollars = [100,100,200,3000,0,0,0];
let nickels = [-5,-5,-5,0,0];
let quarters = [-25,25,-25,25,-25,25];
let zero = [0];

function anyPositive(array) {
  let answer = false;
  for(let i = 0; i<array.length;i++)
  {
    if(array[i] > 0)
    {
      answer = true;
    }
  }
  return answer;
}

function check(array)
{
 let verdict = anyPositive(array);
 return verdict;
}

if (require.main === module) {
  console.log('Running sanity checks for allPositive:');
  console.log(check(pennies) === false);
  console.log(check(dimes) === true);
  console.log(check(dollars) === true);
  console.log(check(nickels) === false);
  console.log(check(quarters) === true);
  console.log(check(zero) === false);
}

module.exports = anyPositive;
