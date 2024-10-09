function solution(A) {
    const set = new Set(A);
    let i = 1;

    while (set.has(i)) {
        i++;
    }
    return i;
}

console.log(`The solution is ${solution([1, 3, 6, 4, 1, 2])}`);
