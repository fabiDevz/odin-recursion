function fib(cant)
{
    let i = 0; 
    let j = 1; 
    let array = [];

    if(cant >= 1) array.push(i);
    if(cant >= 2) array.push(j);

    for(let index = 2 ; index< cant ; index++)
    {

        array.push(array[index-2]+array[index-1]);
    }
return array;

}

function fibRec(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let fibArray = fibRec(n - 1);
      fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
      return fibArray;
    }
  }
  
  

console.log(fibRec(4));
