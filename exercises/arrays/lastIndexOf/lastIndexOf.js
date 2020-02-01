/**
 * Given an array and a value, returns the index of the last occurence of
 * the value. If the value is not found, returns -1.
 *
 * The array doesn't need to contain a single type of data.
 *
 * @example
 * lastIndexOf([10, 20, 30, 20], 20); // => 3
 * lastIndexOf([10, 20, 30, 20], 17); // => -1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); // => 1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} The index of the last occurrence of the value in the
 *  array, or -1 if it's not found.
 */
function lastIndexOf(haystack, needle) {
  let needleIndex;
  for(i=0;i<haystack.length;i++)
  {
    if (haystack[i] === needle)
    {
      needleIndex = i;
    }
  }
  return needleIndex;
}

if (require.main === module) {
  console.log('Running sanity checks for lastIndexOf:');
  console.log(lastIndexOf(([1,2,3,3,3,4,2],2) === 6));
  console.log(lastIndexOf([2,4,8,4],4) === 3);
  console.log(lastIndexOf([99,100,101,99,98,200], 99) === 3);
  console.log(lastIndexOf([3,3,3,3],3) === 3);
  console.log(lastIndexOf([3,3,3,3],4) === undefined);
  console.log(lastIndexOf([3,2,3,3],3) === 3);
}

module.exports = lastIndexOf;
