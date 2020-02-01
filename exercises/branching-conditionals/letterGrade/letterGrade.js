/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  if (!Number.isInteger(percentGrade) || percentGrade < 1 || percentGrade > 100) {
    throw new Error(`Expected a month number from 1-100, received: ${percentGrade}`);
  }

  if (percentGrade > 96 && percentGrade < 101)
    {return "A+";}
  else if (percentGrade > 93 && percentGrade < 97)
    {return "A";}
  else if (percentGrade > 89 && percentGrade < 94)
    {return "A-";}
  else if (percentGrade > 86 && percentGrade < 90)
    {return "B+";}
  else if (percentGrade > 82 && percentGrade < 87)
    {return "B";}
  else if (percentGrade > 79 && percentGrade < 84)
    {return "B-";}
  else if (percentGrade > 76 && percentGrade < 80)
    {return "C+";}
  else if (percentGrade > 72 && percentGrade < 77)
    {return "C";}
  else if (percentGrade > 69 && percentGrade < 74)
    {return "C-";}
  else if (percentGrade > 66 && percentGrade < 70)
    {return "D+";}
  else if (percentGrade > 62 && percentGrade < 67)
    {return "D";}
  else if (percentGrade > 59 && percentGrade < 64)
    {return "D-";}
  else
  {
    return "F";
  }
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');
  console.log(letterGrade(77) === "C+");
  console.log(letterGrade(77));
  console.log(letterGrade(100) === "A+");
  console.log(letterGrade(100));
  console.log(letterGrade(87) === "B+");
  console.log(letterGrade(87));
  console.log(letterGrade(66) === "D");
  console.log(letterGrade(66));
  console.log(letterGrade(55) === "F");
  console.log(letterGrade(55));
  
}

module.exports = letterGrade;
