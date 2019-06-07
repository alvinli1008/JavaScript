const ninjas = ['Yagyu', 'Kuma', 'Hattori'];

// 1. forEach 方法
ninjas.forEach(ninja => {
    console.log(ninja !== null, ninja)  // 
})

// 2. 提取weapon 数组的粗糙方法
const ninjas1 = [
    {name: 'Yagyu', weapon: 'shuriken'},
    {name: 'Yoshi', weapon: 'katana'},
    {name: 'Kuma', weapon: 'wakizashi'},
];

const weapons = [];
ninjas1.forEach(ninja1 => {
    weapons.push(ninja1.weapon)
})
console.log(weapons)  // [ 'shuriken', 'katana', 'wakizashi' ]

// map 映射数组
const weapons2 = ninjas1.map(ninja => ninja.weapon);
console.log(weapons2);  // [ 'shuriken', 'katana', 'wakizashi' ]

// 3.测试数组元素 every和 some方法
const ninjas3 = [
    {name: 'Yagyu', weapon: 'shuriken'},
    {name: 'Yoshi'},
    {name: 'Kuma', weapon: 'wakizashi'},
];

const allNinjasAreNamed = ninjas3.every(ninja => "name" in ninja);
const allNinjasAreArmed = ninjas3.every(ninja => "weapon" in ninja);
console.log(allNinjasAreNamed);  // true
console.log(allNinjasAreArmed);  // false

const someNinjasAreArmed = ninjas3.some(ninja => "weapon" in ninja);
console.log(someNinjasAreArmed);  // true

// 4.数组查找
const ninjas4 = [
    {name: 'Yagyu', weapon: 'shuriken'},
    {name: 'Yoshi'},
    {name: 'Kuma', weapon: 'wakizashi'},
];

const ninjaWithWakizashi = ninjas4.find(ninja => {
    return ninja.weapon === "wakizashi";
});
console.log(ninjaWithWakizashi);  // { name: 'Kuma', weapon: 'wakizashi' }

const ninjaWithKatana = ninjas4.find(ninja => {
    return ninja.weapon === "katana";
});
console.log(ninjaWithKatana);  // undefined

// 查找满足条件的多个元素
const armedNinjas = ninjas4.filter(ninja => "weapon" in ninja);
console.log(armedNinjas);
// [ { name: 'Yagyu', weapon: 'shuriken' },
// { name: 'Kuma', weapon: 'wakizashi' } ]

// 5.查找数组索引
const ninja5 = ['Yagyu', 'Yoshi', 'Kuma', 'Yoshi'];
console.log(ninja5.indexOf("Yoshi"));  // 1
console.log(ninja5.lastIndexOf("Yoshi"));  // 3

const yoshiIndex = ninja5.findIndex(ninja => ninja === "Yoshi");
console.log(yoshiIndex);  // 1

// 6.数组排序
const ninja6 = [{name: 'Yoshi'}, {name: 'Yagyu'}, {name: 'Kuma'}];
const b = ninja6.sort( (ninja1, ninja2) => {
    if(ninja1.name < ninja2.name) { return -1; }
    if(ninja1.name > ninja2.name) { return 1; }

    return 0;
});
console.log(b[0].name);  // Kuma


// 7.合计数组
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((aggregated, number) => 
    aggregated + number, 0);
console.log(sum);  // 10


// 8.复用内置的数组函数
//<input id ='first' />
//<input id ='second' />
// const elems = {
//     length: 0,
//     add: elem => {
//         Array.prototype.push.call(this, elem);
//     },
//     gather: id => {
//         this.add(document.getElementById(id));
//     },
//     find: callback => {
//         return Array.prototype.find.call(this, callback);
//     }
// };
// elems.gather("first");
// const found = elems.find(elem => elem.id === "second");

