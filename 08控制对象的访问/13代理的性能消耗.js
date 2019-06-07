// function createNegativeArrayProxy(array) {
//     if(!Array.isArray(array)) {
//         throw new TypeError ('Expected an array')
//     }

//     return new Proxy(array, {
//         get: (target, index) => {
//             index = +index;  // 使用一元+操作符将属性名变成数值
//             return target[index < 0 ? target.length + index : index];
//         },
//         set: (target, index, val) => {
//             index = +index;
//             return target[index < 0 ? target.length + index : index] = val;
//         }
//     });
// }

function measure(items) {
    const startTime = new Date().getTime();
    for( let i = 0; i < 500000; i++) {
        items[0] === 'Yoshi',
        items[1] === 'Kuma',
        items[2] === 'sss'
    }
    return new Date().getTime - startTime;
}

const ninjas = ['Yoshi', 'Kuma', 'sss']
const proxiedNinjas = createNegativeArrayProxy(ninjas)
console.log('proxies are around', Math.round(measure(proxiedNinjas)/measure(ninjas)), 'times slower')
