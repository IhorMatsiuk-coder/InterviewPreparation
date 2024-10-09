const flat  = [
    { id: 1, name: 'Alice', parentId: null },
    { id: 2, name: 'Bob', parentId: 1 },
    { id: 3, name: 'Charlie', parentId: 2 },
    { id: 4, name: 'David', parentId: 2 },
    { id: 5, name: 'Edward', parentId: null},
    { id: 6, name: 'Frank', parentId: 5 }
]

const recursiveUpdate = (obj, elem) => {
    const {parentId, name, id} = elem;
    const key = parentId;
    const currKeys = Object.keys(obj);

    currKeys.some(data => {
        if(+data === key) {
            obj[key] = {name: obj[key].name, children: {...obj[key].children, [id]: {name}}}
        }

        if(obj[data].children) {
            recursiveUpdate(obj[data].children, elem)
        }
    })
}

const treeBuilderFunction = (flatData) => {
    const resultObject = {};

    flatData.forEach(data => {
        const parentId = data.parentId;
        const elemId = data.id;

        if(!parentId) {
            resultObject[elemId] = {name: data.name}
        } {
            recursiveUpdate(resultObject, data)
        }
    })

    return resultObject;
}

console.dir(treeBuilderFunction(flat), {depth: null});

// const tree = {
//     1: {
//         name:'Alice',
//         children: {
//             2: {
//                 name: 'Bob',
//                 children: {
//                     3: { name: 'Charlie' },
//                     4: { name: 'David' }
//                 }
//             }
//         }
//     },
//     5: {
//         name: 'Edward',
//         children: {
//             6: { name: 'Frank' }
//         }
//     }
// }

