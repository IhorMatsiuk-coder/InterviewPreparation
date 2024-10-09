const func1 = async () => {
    console.log('1', '1');

    setTimeout(() => console.log('2', '8'));
    Promise.resolve().then(() => console.log('3', '5'));

    const func2 = async () => {
        setTimeout(() => console.log('4', '9'), 1);
        console.log('5', '2');
        Promise.resolve().then(() => {
            setTimeout(() => {console.log('6', '10')}, 0)
        });

        const improveValue = new Promise((res) => {
            console.log('7', '3');
            Promise.resolve().then(() => console.log('8', '7'));

            setTimeout(() => {
                res();
            }, 5)
        })

        await improveValue

        console.log('9', '11')
    }

    Promise.resolve().then(() => console.log('10', '6'))

    await func2();

    console.log('11', '12');
}

func1();

console.log('12', '4')
