/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
  let number = 0;
  for (let i = 0 ; i < array.length; i++)
  {
    number = number + array[i];
  }
  return number;
}

if (require.main === module) {
  console.log('Running sanity checks for product:');
  console.log(sum([2, 4, 6]) === 12);
  console.log(sum([2, 4, 6]));
  console.log(sum([-10, 10]) === 0);
  console.log(sum([-10, 10]));
}
module.exports = sum;
