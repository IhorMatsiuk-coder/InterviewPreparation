const a = Promise.resolve(5)
const b = Promise.resolve(25)
const c = Promise.reject('Some Error')
const d = new Promise(res => {
    setTimeout(() => {
        res('After 3000 resolve')
    }, 5000)
})

const e = new Promise(res => {
    setTimeout(() => {
        res('After 3000 resolve')
    }, 5000)
})



const myCoolPromiseAll = (promisesArray) => {
    const promisesResult = {}

    return new Promise((resolve, reject) => {
        promisesArray.forEach((singlePromise, i) => {
            if(singlePromise instanceof Promise) {
                singlePromise.then((res) => {
                    promisesResult[i] = res
                    const resultValues = Object.values(promisesResult);

                    if(resultValues.length >= promisesArray.length) {
                        resolve(resultValues)
                    }
                }).catch(e => {
                    reject(e)
                })
            } else {
                promisesResult[i] = singlePromise
            }
        })
    });
}

Promise.all([e,a,b,d, 10, undefined]).then(data => console.log('res1-----', data))
myCoolPromiseAll([e,a,b,d, 10, undefined]).then(res => console.log('res2-----', res))

