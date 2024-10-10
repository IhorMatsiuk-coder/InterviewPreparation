// Got 5 return '543212345'

const numberLineCreator = (n) => {
    const array = Array.from({length: n}, (_, i) => i + 1);

    return [...[...array].reverse(), ...array.splice(1)].join('')
}

const numberLineCreator2 = (n) => {
    let result = "";
    let i = 2
    const leftPart = [];
    const rightPart = [];

    while(n > 0) {
        if(n === 1) {
            result = [...leftPart, n, ...rightPart].join('');
            break;
        }

        rightPart.push(i);
        leftPart.push(n);

        i++;
        n--;
    }

    return result
}

console.log(numberLineCreator(5))
console.log(numberLineCreator2(7))

// Got 'aaavvkvkkssk' return 'a3v2k1v1k2s2k1
const stringElementsCountFormatter = (str) => {
    let firstIndex = 0;
    let secondIndex = 0;
    let currLetter = '';
    let currCount = 0;
    let result = "";

    while(firstIndex < str.length) {
        if(str[firstIndex] === str[secondIndex]) {
            currCount++;
            secondIndex++;
        } else {
            result += currLetter + currCount;
            currCount = 0;
            firstIndex = secondIndex
        }

        currLetter = str[firstIndex];
    }

    return result;
}
//a3v2k1v1k2s2k1
console.log(stringElementsCountFormatter('aaavvkvkkssk'))
//k2d1k2f2k1s3
console.log(stringElementsCountFormatter('kkdkkffksss'))

