/**
 * Given an array of numbers, returns true if _every_ element is positive
 * and false otherwise.
 *
 * @example
 * allPositive([1, 2, 3, 4, 5]); // => true
 * allPositive([1, 2, -3, 4, 5]); // => false
 * allPositive([0, 0, 1]); // => false
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
let pennies = [1,1,1,1,1,1,1,1,1];
let dimes = [10,10,-10];
let dollars = [100,100,200,3000,0,0,0];
let nickels = [-5,-5,-5];
let quarters = [25,25,25,25,25,25];

function allPositive(array) {
  let answer = true;
  for(let i = 0; i<array.length;i++)
  {
    if(array[i] < 1 || array[i] === 0)
    {
      answer = false;
    }
  }
  return answer;
}

function check(array)
{
 let verdict = allPositive(array);
 return verdict;
}

if (require.main === module) {
  console.log('Running sanity checks for allPositive:');
  console.log(check(pennies) === true);
  console.log(check(dimes) === false);
  console.log(check(dollars) === false);
  console.log(check(nickels) === false);
  console.log(check(quarters) === true);
}

module.exports = allPositive;
