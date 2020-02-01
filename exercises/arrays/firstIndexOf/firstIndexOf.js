/**
 * Given an array and a value, returns the index of the first occurence of
 * the value. If the value is not found, returns -1.
 *
 * The array doesn't need to contain a single type of data.
 *
 * @example
 * firstIndexOf([10, 20, 30, 20], 20); // => 1
 * firstIndexOf([10, 20, 30, 20], 17); // => -1
 * firstIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); // => 0
 * firstIndexOf(['giraffe', giraffe', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} The index of the first occurrence of the value in the
 *  array, or -1 if it's not found.
 */
function firstIndexOf(haystack, needle) {
  let needleIndex;
  for(i=0;i<haystack.length;i++)
  {
    if (haystack[i] === needle)
    {
      needleIndex = i;
      return needleIndex;
    }
  }
}

/*function check(output, expected)
{
  if (output.length != expected.length){
    return false;
  }
  
  for (let i = 0; i < output.length; i++){
    if (output[i] != expected[i]){
      return false;
    }
  }

  return true;
}*/

if (require.main === module) {
  console.log('Running sanity checks for countGreaterThan:');
  console.log(firstIndexOf(([1,2,3,3,3,4,2],2) === 1));
  console.log(firstIndexOf([2,2,8,4],4) === 3);
  console.log(firstIndexOf([100,101,99,98,200], 99) === 2);
  console.log(firstIndexOf([3,3,3,3],4) === undefined);
  console.log(firstIndexOf([3,3,3,3],4));
  console.log(firstIndexOf([3,3,3,3],3) === 0);
}
module.exports = firstIndexOf;
