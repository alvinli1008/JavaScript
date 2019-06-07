function createNegativeArrayProxy(array) {
    if(!Array.isArray(array)) {
        throw new TypeError ('Expected an array')
    }

    return new Proxy(array, {
        get: (target, index) => {
            index = +index;  // 使用一元+操作符将属性名变成数值
            return target[index < 0 ? target.length + index : index];
        },
        set: (target, index, val) => {
            index = +index;
            return target[index < 0 ? target.length + index : index] = val;
        }
    });
}
const ninjas = ['Yoshi', 'Kuma', 'Hattori']
const proxiedNinjas = createNegativeArrayProxy(ninjas)

console.log(proxiedNinjas[-1])
