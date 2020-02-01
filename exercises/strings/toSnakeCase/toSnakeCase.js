/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A snake-case copy of the input string
 */

function toSnakeCase(string) {
  let snakeCase = string.toLowerCase();
  let characters = snakeCase.split("");

  for(let i = 0; i<string.length;i++)
  {
    if(snakeCase[i] === " ")
      {
        characters.splice(i,1,"_");
      }
  }
  let snake = characters.join("");
  return snake;
}

if (require.main === module) {
  console.log('Running sanity checks for toSnakeCase:');
  console.log(toSnakeCase("UsE tAbS nOt sPaCeS") === "use_tabs_not_spaces");
  console.log(toSnakeCase("HAHAHAHA noice") === "hahahaha_noice");
  console.log(toSnakeCase("     ") === "_____");

}

module.exports = toSnakeCase;
