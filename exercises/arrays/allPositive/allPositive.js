
let pennies = [1,1,1,1,1,1,1,1,1];
let dimes = [10,10,-10];
let dollars = [100,100,200,3000,0,0,0];
let nickels = [-5,-5,-5];
let quarters = [25,25,25,25,25,25];

function allPositive(array) {
  // This is your job. :)
  let answer = true;
  for(let i = 0; i<array.length;i++)
  {
    if(array[i] < 1 || array[i] === 0)
    {
      answer = false;
    }
  }
  return answer;
}

function check(array)
{
 let verdict = allPositive(array);
 return verdict;
}

if (require.main === module) {
  console.log('Running sanity checks for allPositive:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(check(pennies) === true);
  console.log(check(dimes) === false);
  console.log(check(dollars) === false);
  console.log(check(nickels) === false);
  console.log(check(quarters) === true);
}

module.exports = allPositive;
