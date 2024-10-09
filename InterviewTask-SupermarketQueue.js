function queueTime(customers, n) {
    if(!customers.length) return 0;

    let index = 0;
    const resData = Array(n).fill(0)

    while(index < customers.length) {
        const lessIndex = resData.indexOf(Math.min(...resData))

        resData[lessIndex] = resData[lessIndex] + customers[index]
        index++;
    }

    return Math.max(...resData)
}

console.log('res----', queueTime([7,10,14,3,8,15,16,6,4,7,18], 6))
