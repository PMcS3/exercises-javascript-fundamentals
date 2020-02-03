/**
 * Given an array of integers, return a new array consisting of only
 * the even integers from the original array.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectEvens([1, 2, 3, 4, 5]); // => [2, 4]
 * selectEvens([10, 2, 19, 10]); // => [10, 2, 10]
 * selectEvens([1, 1, 1, 2]); // => [2]
 * selectEvens([11, 21, 31]); // => []
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all the even numbers in the input array
 */
function selectEvens(array) {
 for (i=0;i<array.length;i++)
 {
   if(array[i]%2 != 0)
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
  
  for (let q = 0; q < output.length; q++){
    if (output[q] != expected[q]){
      return false;
    }
  }

  return true;
}

if (require.main === module) {
  console.log('Running sanity checks for selectEvens:');
  console.log(check(selectEvens([3,3,2,4,6,7,13]),[2,4,6]));
  console.log(check(selectEvens([3,2,3,7,13]),[2]));
  console.log(check(selectEvens([2,2,4,6,],[2,2,4,6])));

}

module.exports = selectEvens;
