const bracketsPairs = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
}
const closedBracketsList = new Set(Object.values(bracketsPairs))

const bracketsAreBalanced = (str) => {
    if(typeof str !== 'string') throw new Error('Data is not a string!!!');
    let openBracketsCount = 0;
    let closeBracketsCount = 0;
    const bracketsNeedToClose = [];

    [...str].forEach(data => {
        if(closedBracketsList.has(data)) {
            if(data === bracketsNeedToClose[bracketsNeedToClose.length - 1]){
                bracketsNeedToClose.pop()
            }
            closeBracketsCount++;
        }
        if(bracketsPairs[data]) {
            bracketsNeedToClose.push(bracketsPairs[data])
            openBracketsCount++;
        }
    })
    if(openBracketsCount !== closeBracketsCount) return false

    return bracketsNeedToClose.length === 0;
}

console.log(bracketsAreBalanced('(rerere)fdf{dfdf}[dddd(dsd)]'))
console.log(bracketsAreBalanced('{}jjj'))
console.log(bracketsAreBalanced('({[]})'))
console.log(bracketsAreBalanced(')'))
