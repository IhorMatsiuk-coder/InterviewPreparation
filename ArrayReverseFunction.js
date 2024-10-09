const a =  [1,2,3,4,5];
const b =  [1,2,3,4,5,6];

const arrayReverseFunction = (arr) => {
    for(let i = 0; i < arr.length/2; i++) {
        const leftElem = arr[i];
        const rightElemIndex = arr.length - 1 - i;

        arr[i] = arr[rightElemIndex];
        arr[rightElemIndex] = leftElem;
    }

    return arr;
}

console.log('arrayReverseFunction----a', arrayReverseFunction(a));
console.log('arrayReverseFunction----b', arrayReverseFunction(b));

