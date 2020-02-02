/**
 * Given an array of strings, return a new array with all the elements
 * of the original array except null, undefined, and the empty string ''.
 *
 * @example
 * removeEmpty([null, '', '']); // => []
 * removeEmpty(['Jesse', undefined, 'Farmer']); // => ['Jesse', 'Farmer']
 * removeEmpty(['one', '', 'two', '', 'three']); // => ['one', 'two', 'three']
 *
 * @param {string[]} array - An array of strings
 * @returns {string[]} A new array consisting of all the non-empty values in the
 *   input array.
 */
function removeEmpty(array) {
  for(i=0;i<=array.length;i++)
  {
    if (array[i] === '' || array[i] === null || array[i] === undefined)
    {
      array.splice(i,1);
    }
  }
  return array;
}

function check(output, expected)
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
}

if (require.main === module) {
  console.log('Running sanity checks for removeEmpty:');
  console.log(check(removeEmpty([null, '', '']),[]));
  console.log(removeEmpty([null, '', '']),[]); //?
  console.log(check(removeEmpty(['Jesse', undefined, 'Farmer']), ['Jesse', 'Farmer']));
  console.log(check(removeEmpty(['one', '', 'two', '', 'three']),['one', 'two', 'three']));
}

module.exports = removeEmpty;
