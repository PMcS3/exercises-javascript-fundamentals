/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an odd integer of `height`, prints "plus" pattern `height` characters
 * tall consisting of `#` characters.
 *
 * Note:
 * 1. The input must be an ODD integer or else printing a "plus" pattern
 * isn't possible since there's no "middle point" for the two lines to cross.
 * 2. This PRINTS a plus pattern, it does not RETURN anything.
 *
 * @example
 * printPlus(3); // Prints the following:
 *  #
 * ###
 *  #
 *
 * @example
 * printPlus(5); // Prints the following:
 *   #
 *   #
 * #####
 *   #
 *   #
 *
 * @param {number} height - The height of the plus symbol to print. It must be
 *  an odd integer.
 */
function printPlus(height) {
  // If height is not an odd integer, throw an error.
  if (!Number.isInteger(height) || height % 2 !== 1) {
    throw new Error(`height must be an odd integer, received: ${height}`);
  }

  let midpoint = Math.floor((height/2));
  //console.log(midpoint);

 
    for (let j = 1; j <= midpoint; j++)
    {
      helpers.printCountTimes(' ', midpoint);
      helpers.printCountTimes('#', 1);
      helpers.printNewLine();
    }
    helpers.printCountTimes('#', height);
    helpers.printNewLine();
    for (let q = 1; q <= midpoint; q++)
    {
      helpers.printCountTimes(' ', midpoint);
      helpers.printCountTimes('#', 1);
      helpers.printNewLine();
    }
  

}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function plusPrintTest(height) {
  console.log('');
  console.log(`Printing a PLUS SYMBOL of height ${height}:`);

  printPlus(height);
}

if (require.main === module) {
  plusPrintTest(1);
  plusPrintTest(3);
  plusPrintTest(5);
  plusPrintTest(7);
  plusPrintTest(9);
}

module.exports = printPlus;
