const bracketPairs = { '[':']', '{':'}', '(':')' }
const closingBrackets = new Set(Object.values(bracketPairs))

function bracketsAreBalanced(text) {
    const needToClose = [] // stack of (closing) brackets that need to be closed;

    for (const c of text) {
        if (closingBrackets.has(c) && c === needToClose[needToClose.length-1]) {
            needToClose.pop()
        }
        if (bracketPairs[c]) {
            needToClose.push(bracketPairs[c])
        }
    }

    return needToClose.length === 0
}

// console.log(bracketsAreBalanced('{({h}i)}the[test]re'))
console.log(bracketsAreBalanced('()jjj'))
