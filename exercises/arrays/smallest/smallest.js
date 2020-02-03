/**
 * Given an array, returns the smallest element in the array.
 *
 * Assume the array contains only numbers.
 *
 * @param {number[]} array - The input array
 * @returns {number} The smallest element in the array
 */
function smallest(array) {
  let small = 10000000000000000000000000000000;

  for (let i = 0;i<array.length;i++) {
    if (small > array[i]) {
      small = array[i];
    }
  }

  return small;
}

if (require.main === module) {
  console.log('Running sanity checks for smallest:');

  console.log(smallest([1, 2, 3]) === 1);
  console.log(smallest([1, 2, 3]));
  console.log(smallest([0, -100, 50, -200]) === -200);
  console.log(smallest([-200, -400, -100, -300]) === -400);
  console.log(smallest([0]) === 0);
  console.log(smallest([1]) === 1);
  console.log(smallest([1]));
  console.log(smallest([-1]) === -1);
  console.log(smallest([11, 11, 11]) === 11);
  console.log(smallest([11, 11, 11]));
  console.log(smallest([-22, -11, -22]) === -22);
}

module.exports = smallest;
