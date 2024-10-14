function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    // initialize the window
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // slide the window over the array
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

// example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 3;
const maxSum = maxSubarraySum(arr, num);
// console.log('maxSum-----',maxSum)

function lengthOfLongestSubstring(s) {
    let currWindowStart = 0;
    let currWindowLength = 0;
    let longestWindowLength = 0;
    let lastSeenMap = {};
    let index;

    for (index = 0; index < s.length; index++) {
        let char = s[index];

        if (char in lastSeenMap) {
            if (lastSeenMap[char] >= currWindowStart) {
                currWindowLength = index - currWindowStart
                if (currWindowLength > longestWindowLength) {
                    longestWindowLength = currWindowLength
                }
            }
            currWindowStart = lastSeenMap[char] + 1
        }

        lastSeenMap[char] = index
    }
    if (longestWindowLength < index - currWindowStart) {
        longestWindowLength = index - currWindowStart
    }

    return longestWindowLength
}

console.log(lengthOfLongestSubstring('pwwkew'))
