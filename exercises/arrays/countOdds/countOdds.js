/**

 */
function countOdds(array) {
  for(i=0;i<array.length;i++)
  {
    if(array[i]%2 === 0)
    {
      array.splice(i,1)
    }
  }
  return array.length;
}

function check(output, expected)
{
  if (output.length !== expected.length){
    return false;
  }
  
  for (let i = 0; i < output.length; i++){
    if (output[i] !== expected[i]){
      return false;
    }
  }

  return true;
}
if (require.main === module) {
  console.log('Running sanity checks for countEvens:');
  console.log(check(countOdds([1,2,3,4]),2));
  console.log(check(countOdds([2,2,8,4]),0));
  console.log(check(countOdds([3,7,13,17,21]),5));
  console.log(check(countOdds([3,3,3,3]),4));

}

module.exports = countOdds;
