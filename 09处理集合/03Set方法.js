// // 1. 通过对象模拟Set
// function Set() {
//     this.data = {};
//     this.length = 0;
// }

// Set.prototype.has = function(item) {
//     return typeof this.data[item] !== "undefined";
// };

// Set.prototype.add = function(item) {
//     if(!this.has(item)) {
//         this.data[item] = true;
//         this.length++;
//     }
// };

// Set.prototype.remove = function(item) {
//     if(this.data[item]) {
//         delete this.data[item];
//         this.length--;
//     }
// };

// const ninjas = new Set();
// ninjas.add("Hataka");
// ninjas.add("Hataka");
// console.log(ninjas.has("Hataka") && ninjas.length === 1);  // true
// ninjas.remove("Hataka");
// console.log(ninjas.has("Hataka") && ninjas.length === 0);  // false

//2. 创建Set 
const ninjas2 = new Set(["Kuma", "Hattori", "Yagyu", "Hattori"]);
console.log(ninjas2.size);  // 3
console.log(ninjas2.has("Hattori"));  // true
console.log(!ninjas2.has("Yoshi"));  // true


ninjas2.add("Yoshi");
console.log(ninjas2.has("Yoshi"));  // true
console.log(ninjas2.size);  // 4

for(let ninja of ninjas2) {
    console.log(ninja !== null, ninja);
}

// 3.并集
const a = ["ddd", "fff", "ggg"];
const b = ["fff", "ccc", "www"];

const warriors = new Set([...a, ...b]);
console.log(warriors);  // Set { 'ddd', 'fff', 'ggg', 'ccc', 'www' }

// 4.交集
const d = new Set(["www", "ddd", "fff"]);
const e = new Set(["ddd", "qqq", "vvv"])
const Samurais = new Set(
    [...d].filter(ninja => e.has(ninja))
);
console.log(Samurais);  // Set { 'ddd' }

// 5.差集
const pure = new Set(
    [...d].filter(ninja => !e.has(ninja))
);
console.log(pure);  // Set { 'www', 'fff' }