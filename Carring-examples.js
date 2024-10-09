const sum = (arg) => {
    let accRes = arg;
    const f = (s) => {
        accRes = accRes + s;
        console.log('1', accRes);
        return f;
    };
    console.log('2', accRes);
    return f;
};
// sum(1);
sum(1)(2)(3)(4)(5);
