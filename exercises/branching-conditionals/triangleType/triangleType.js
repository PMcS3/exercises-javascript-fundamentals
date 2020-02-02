/**
 * Given the the length of three triangle sides, returns the triangle's type as a string, i.e.,
 * `'acute'`, `'right'`, `'obtuse'`, or `'invalid'`.
 *
 * See https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf
 *
 * If a triangle can't be formed from the three side lengths then return `'invalid'`.
 *
 * @example
 * triangleType(3, 4, 5); // => 'right'
 * triangleType(4, 3, 5); // => 'right' (the order of arguments shouldn't matter)
 * triangleType(1, 1, 1); // => 'acute'
 * triangleType(12, 15, 8); // => 'obtuse'
 * triangleType(1, 1, 3); // => 'invalid'
 *
 * @param {number} monthNum - A number representing the month, with 1 for January
 *   and 12 for December.
 * @return {number} The number of days in the given month
 */
function triangleType(a,b,c) {
  let sides = [a, b, c].sort()

  if (sides[0] + sides[1] < sides[2] || sides[0] + sides[1] === sides[2])
  {
    return 'invalid';
  }

  if (sides[0] === sides[1] && sides[1] === sides[2])
    { return 'acute';}
  else if ((sides[0]*sides[0])+(sides[1]*sides[1]) === (sides[2]*sides[2]))
    { return 'right';}
  else  
    { return 'obtuse';}
  

}

if (require.main === module) {
  console.log('Running sanity checks for triangleType:');
  console.log(triangleType(3, 4, 5) === 'right');
  console.log(triangleType(4, 3, 5) === 'right');
  console.log(triangleType(1, 1, 1) === 'acute');
  console.log(triangleType(12, 15, 8) === 'obtuse');
  console.log(triangleType(1, 1, 3) ==='invalid');
  console.log(triangleType(24, 30, 16) === 'obtuse');
  console.log(triangleType(0, 0, 0) === 'invalid');
}

module.exports = triangleType;
