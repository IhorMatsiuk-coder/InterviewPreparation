const myCoolMemoFunction = (callback) => {
    const store = new Map();

    return (...args) => {
        const key = JSON.stringify(args);

        if(!store.has(key)) {
            store.set(key, callback(...args))
        }

        return store.get(key)
    }
}

const myTestWrapper = (callback) => {
    let count = 0;

    const funF = (...args) => {
        count++;
        return callback(...args)
    }

    funF.toHaveBeenCalledTimes = (calledTimes) => {
        return calledTimes === count
    };

    funF.getCalledTimes = () => {
        return count
    };

    return funF
}

const callback = myTestWrapper(x => x + 1)
const memoF = myCoolMemoFunction(callback);

memoF(5);
memoF(5);
memoF(5);
memoF(6);
memoF(6);
memoF(6);
memoF(6);
memoF(7);
console.log('____________________________')
console.log('getCalledTimes: ', callback.getCalledTimes())
console.log('toHaveBeenCalledTimes: ', callback.toHaveBeenCalledTimes(4))

