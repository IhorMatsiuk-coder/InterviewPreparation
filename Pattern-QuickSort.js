const arr = [
    0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
    3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
    -1, -5, 23,
];
let count = 0;

const quickSort = (arr) => {
    if(arr <= 1) {
        return arr
    }

    const pivotElemIndex = Math.floor(arr.length/2)
    const pivotElem = arr[pivotElemIndex]
    let lessArray = [];
    let greatArray = [];

    for(let i = 0; i < arr.length; i++) {
        count++;
        if(i === pivotElemIndex) continue;
        if(arr[i] < pivotElem) {
            lessArray.push(arr[i])
        }else {
            greatArray.push(arr[i])
        }
    }

    return [...quickSort(lessArray), pivotElem, ...quickSort(greatArray)]
}

console.log('-----arr: ', quickSort(arr));
console.log('-----count: ', count);
console.log('-----arr: ', arr.length);
