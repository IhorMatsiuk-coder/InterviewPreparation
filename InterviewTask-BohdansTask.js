const array1 = [4,2,8,1,9]; //drop:4, result 2 -----> |2-1| + |9-8| = 2
const array2 = [4,1,2,16,8]; //drop:16, result 5 -----> |1-2| + |4-8| = 5
const array3 = [2,13,12,9,6,3,2]; //drop:9, result 4 -----> |2-2| + |13-12| + |6-3| = 4

const removeExtraElem = (arr) => {
    arr.sort((a,b) => a - b);
    let i = 0;
    let extraElemIndex;
    let biggestDiff = Number.MIN_VALUE;

    while(i < arr.length) {
        const isFirstElem = i === 0;
        const isLastElem = (i === arr.length - 1);
        const isNotFistOrLast = !isFirstElem && !isLastElem
        let minDiff;

        const rightCurrDiff = arr[i + 1] - arr[i];
        const leftCurrDiff = arr[i] - arr[i - 1];

        if(isFirstElem) {
            minDiff = rightCurrDiff;
        }
        if(isLastElem) {
            minDiff = leftCurrDiff;
        }

        if(isNotFistOrLast)
            minDiff = Math.min(leftCurrDiff, rightCurrDiff)

        if(minDiff > biggestDiff) {
            biggestDiff = rightCurrDiff;
            extraElemIndex = i
        }

        i++;
    }

    arr.splice(extraElemIndex, 1);

    return arr;
}

function minDifference(array) {
    let ans = 0;
    const arr = removeExtraElem(array)

    for (let i = 1; i < arr.length; i += 2) {
        ans += (arr[i] - arr[i-1]);
    }
    return ans;
}

console.log('result: ', minDifference(array3))
