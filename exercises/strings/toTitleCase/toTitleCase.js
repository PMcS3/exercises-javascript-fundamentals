/**
 * Given an input string, returns a copy of the string in title case.
 *
 * For our purposes, title case is words separated by spaces with the
 * first letter of each word being capitalized and every other letter
 * being lowercsae.
 *
 * Don't do anything special with non-alphabetic characters (numbers,
 * puncuation, etc.). Don't worry about special rules like not capializing
 * definite articles (a, an, the, etc).
 *
 * @example
 * toTitleCase('wElCoMe to THE wILD wiLD WEST!'); // => 'Welcome To The Wild Wild West!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toTitleCase(string) {
  let lowerString = string.toLowerCase();
  let letters = lowerString.split("");

  for (i=0;i<letters.length;i++)
  {
    if(i === 0)
    {
      letters[i] = letters[i].toUpperCase();
    }
    else if(letters[i] === " ")
      {
        letters[i+1] = letters[i+1].toUpperCase();
      }
  }
  let titleCase = letters.join("");
  return titleCase;
}

if (require.main === module) {
  console.log('Running sanity checks for toTitleCase:');
  console.log(toTitleCase("i wAnT diNner") === "I Want Dinner");
  console.log(toTitleCase("I wAnT diNner") === "I Want Dinner");
  console.log(toTitleCase("i") === "I");
  console.log(toTitleCase("deeeeep Web") === "Deeeeep Web");
  console.log(toTitleCase("deeeeep web") === "Deeeeep Web");
  console.log(toTitleCase("I LOVE LIZZO") === "I Love Lizzo");
  
}

module.exports = toTitleCase;
