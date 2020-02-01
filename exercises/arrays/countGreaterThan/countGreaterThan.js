/**
 * Given an array of numbers and a threshold number, return the count of
 * elements in the array strictly greater than the threshold number.
 *
 * "Strictly greater than" means we want numbers greater than (>) and not
 * greater than or equal to (>=).
 *
 * @example
 * countGreaterThan([1, 2, 3, 4, 5], 2); // => 3
 * countGreaterThan([1, 2, 3, 4, 5], 17); // => 0
 * countGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 5
 * countGreaterThan([10, 10, 10, -10, 15], 10); // => 1
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for counting
 * @returns {number} The number of elements in the array greater than threshold
 */
function countGreaterThan(array, threshold) {
  for(i=0;i<array.length;i++)
  {
    if(array[i] < threshold)
    {
      array.splice(i,1)
    }
  }
  return array.length;
}

function check(output, expected)
{
  if (output.length !== expected.length){
    return false;
  }
  
  for (let i = 0; i < output.length; i++){
    if (output[i] !== expected[i]){
      return false;
    }
  }

  return true;
}

if (require.main === module) {
  console.log('Running sanity checks for countGreaterThan:');
  console.log(check(countGreaterThan([1,2,3,4],3),2));
  console.log(check(countGreaterThan([2,2,8,4],5),1));
  console.log(check(countGreaterThan([100,101,99,98,200], 100),3));
  console.log(check(countGreaterThan([3,3,3,3],1),4));
  console.log(check(countGreaterThan([3,3,3,3],7),0));
}

module.exports = countGreaterThan;
