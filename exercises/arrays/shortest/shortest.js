/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
function shortest(array) {
  let shortest = " ";
  for (i=0;i<array.length;i++)
  {
    if (shortest.length > array[i].length)
    {
      shortest = array[i];
    }
  }
  return shortest;
}

if (require.main === module) {
  console.log('Running sanity checks for shortest:');
  console.log(shortest(['hi','hey','hello']) === 'hi');
  console.log(shortest(['hi','hey','hello']));
  console.log(shortest(['yes','yee','affirmative', 'yea', 'ye']) === 'ye');
  console.log(shortest(['yes','yee','affirmative', 'yea', 'ye']));
}

module.exports = shortest;
