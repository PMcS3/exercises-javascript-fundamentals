/**
 * Given an array of strings and a threshold length, returns a new array
 * consisting of only the strings with length strictly less than the
 * given threshold.
 *
 * Return an empty array if no such strings exist.
 *
 * @example
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => []
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => ['', 'aaa', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5); // => ['', 'aaa', 'bb', 'c', 'dddd']
 *
 * @param {string[]} array - An array of strings
 * @param {number} threshold - A length threshold
 * @returns {string[]} An array of all strings in the input array with length
 *  strictly less the given threshold
 */
function selectShorterThan(array, threshold) {
  let newArray = [];
  for (i=0;i<array.length;i++)
  {
    if(array[i].length < threshold)
    {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function check(output, expected)
{

  if (output.length !== expected.length){
    return false;
  }
  
  for (let q = 0; q < output.length; q++){
    if (output[q] !== expected[q]){
      return false;
    }
  }

  return true;
}


if (require.main === module) {
  console.log('Running sanity checks for selectGreaterThan:');
  console.log(check(selectShorterThan(['i','ii','iii','iiii','iiiii','iiiiii','iiiiiii'],4),['i','ii','iii']));
  console.log(check(selectShorterThan(['i','ii','iii','iiii','iiiii','iiiiii','iiiiiii'],2),['i']));
}

module.exports = selectShorterThan;
