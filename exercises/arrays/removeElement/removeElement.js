/**
 * Given an array and an element, return a new array with all instances of the
 * given element removed.
 *
 * @example
 * removeElement([1, 1, 1], 1); // => []
 * removeElement([1, 2, 1], 1); // => [2]
 * removeElement(['one', 'two', 'three'], 'two'); // => ['one', 'three']
 * removeElement(['Jesse', undefined, 'Farmer'], undefined); // => ['Jesse', 'Farmer']
 *
 * @param {object[]} array - An array
 * @param {object} element - An element to remove
 * @returns {object[]} A copy of the input array with all instances of the given
 *   element removed.
 */
function removeElement(array, element) {
 for(let i=0;i<array.length;i++)
 {
   if (array[i] === element)
   {
    array.splice(i,1);
   }
 }
 return array;
}

if (require.main === module) {
  console.log('Running sanity checks for removeElement:');
  console.log(removeElement([1, 1, 1], 1) === []);
  console.log(removeElement([1, 1, 1], 1));
  console.log(removeElement([1, 2, 1], 1) === [2]);
  console.log(removeElement([1, 2, 1], 1));
  console.log(removeElement(['one', 'two', 'three'], 'two') === ['one', 'three']);
  console.log(removeElement(['one', 'two', 'three'], 'two'));
  console.log(removeElement(['Jesse', undefined, 'Farmer'], undefined) === ['Jesse', 'Farmer']);
  console.log(removeElement(['Jesse', undefined, 'Farmer'], undefined));
}

module.exports = removeElement;
