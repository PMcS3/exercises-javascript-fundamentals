/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  let longestWord = "";
  for(i=0;i<array.length;i++) {
    if ( array[i].length > longestWord.length)
    {
      longestWord = array[i];
    }
  }
  return longestWord;
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');
  console.log(longest(["cat","dog","kitten"]));
  console.log(longest(["cat","dog","kitten"]) === "kitten");
  console.log(longest(["cat","dog","log",]) === "cat");
  console.log(longest([" ","","",]) === " ");
  console.log(longest(["","","",]) === "");

}

module.exports = longest;
