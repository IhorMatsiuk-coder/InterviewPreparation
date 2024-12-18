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

// console.log(lengthOfLongestSubstring('pwwkew'))

const longestPalindrome = function (string) {
    let longestPal = '';

    const getLongestPalindrome = function (leftPosition, rightPosition) {
        // While there is space to expand, and the expanded strings match
        while (
            leftPosition >= 0 &&
            rightPosition < string.length &&
            string[leftPosition] === string[rightPosition]
            ) {
            // Expand in each direction.
            leftPosition--;
            rightPosition++;
        }

        // Store the longest palindrom (if it's the longest one found so far)
        if (rightPosition - leftPosition > longestPal.length) {
            longestPal = string.slice(leftPosition + 1, rightPosition);
        }

    };

    // Loop through the letters
    for (let i = 0; i < string.length; i++) {
        // Find the longest odd palindrome
        getLongestPalindrome(i, i + 1);

        // Find the longest even palindrome
        getLongestPalindrome(i, i);

        // Check if a longer palindrome cannot be found
        if ((string.length - i) * 2 < longestPal.length) {
            // Break out to avoid unnecessary computation
            break;
        }
    }

    return longestPal;
};

console.log(longestPalindrome('babaccccabad'))
// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
