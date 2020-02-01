let pennies = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let dimes = [10,10,-10];
let dollars = [100,100,200,3000,0,0,0];
let nickels = [-5,-5,-5,0,0];
let quarters = [-25,25,-25,25,-25,25];
let zero = [0];

function anyPositive(array) {

  let answer = false;
  for(let i = 0; i<array.length;i++)
  {
    if(array[i] > 0)
    {
      answer = true;
    }
  }
  return answer;
}

if (require.main === module) {
  console.log('Running sanity checks for anyPositive:');
function check(array)
{
 let verdict = anyPositive(array);
 return verdict;
}
}
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
if (require.main === module) {
  console.log('Running sanity checks for allPositive:');
  console.log(check(pennies) === false);
  console.log(check(dimes) === true);
  console.log(check(dollars) === true);
  console.log(check(nickels) === false);
  console.log(check(quarters) === true);
  console.log(check(zero) === false);
}

module.export = anyPositive;
