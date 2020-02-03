/**
 * Given an array of integers, returns a new array consisting of only
 * the odd integers from the original array.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectOdds([1, 2, 3, 4, 5]); // => [1, 3, 5]
 * selectOdds([10, 2, 19, 10, -103]); // => [19, -103]
 * selectOdds([1, 1, 2, 1]); // => [1, 1, 1]
 * selectOdds([10, 20, 30]); // => []
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all the odd numbers in the input array
 */
function selectOdds(array) {
  for (i=0;i<=array.length;i++)
  {
    if(array[i]%2 === 0)
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
   console.log(check(selectOdds([3,3,2,4,6,7,13]),[3,3,7,13]));
   console.log(selectOdds([3,3,2,4,6,7,13]));
   console.log(check(selectOdds([3,2,3,7,13]),[3,3,7,13]));
   console.log(check(selectOdds([1,2,2,4,6,]),[1]));
 
 }
module.exports = selectOdds;
