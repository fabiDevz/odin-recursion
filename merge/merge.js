function mergeSort(array)
{

    if(array.length == 1)
    {
        console.log('marca');
        return array;
        
    }

    const index = Math.floor(array.length / 2);

    let arrayLeft = array.slice(0, index);
    let arrayRight = array.slice(index);

    console.log(arrayLeft);
    console.log(arrayRight);

    let sortArrayLeft = mergeSort(arrayLeft);
    let sortArrayRight = mergeSort(arrayRight);

    let resultado = [];

    while (sortArrayLeft.length > 0 && sortArrayRight.length > 0) {
 
        if (sortArrayLeft[sortArrayLeft.length - 1] > sortArrayRight[sortArrayRight.length - 1]) {
         
            resultado.unshift(sortArrayLeft.pop()); // Agrega al principio del array resultado
        } else {
           
            resultado.unshift(sortArrayRight.pop()); 
        }
    }

    while (sortArrayLeft.length > 0) {
        resultado.unshift(sortArrayLeft.pop());
    }
    while (sortArrayRight.length > 0) {
        resultado.unshift(sortArrayRight.pop());
    }

console.log('resultado');
 console.log(resultado);
    

return resultado;
}

let array = [105, 79, 100, 110];
array.length
mergeSort(array);


