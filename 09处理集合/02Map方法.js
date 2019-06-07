const dictionary = {
    "ja": {
        "Ninjas for hire": "ja忍者"
    },
    "zh": {
        "Ninjas for hire": "忍者出租"
    },
    "ko": {
        "Ninjas for hire": "ko忍者"
    }
}

console.log(dictionary.ja);  // { 'Ninjas for hire': 'ja忍者' }
console.log(dictionary.ja["constructor"]);  // [Function: Object]  // constructor 是原型对象的原型， 指回构造函数本身


// 1. 创建第一个map
const ninjaIslandMap = new Map();
const ninja1 = { name: "Yoshi" };
const ninja2 = { name: 'Hattori' };
const ninja3 = { name: "Kuma" };
ninjaIslandMap.set(ninja1, { homeIsland: "Honshu" });
ninjaIslandMap.set(ninja2, { homeIsland: "Hokkaido" });

console.log(ninjaIslandMap.get(ninja1).homeIsland);  // Honshu
console.log(ninjaIslandMap.get(ninja2).homeIsland);  // Hokkaido
// console.log(ninjaIslandMap.get(ninja3).homeIsland);  // 抛出错误 undefined

console.log(ninjaIslandMap.size);  // 2
console.log(ninjaIslandMap.has(ninja1));  // true

ninjaIslandMap.delete(ninja1);  // 
console.log(ninjaIslandMap.has(ninja1), ninjaIslandMap.size);  // false 1

ninjaIslandMap.clear();
console.log(ninjaIslandMap.size);  // 0

// 2.Key相等
// const map = new Map();
// const currentLocation = location.href;
// const firstLink = new URL(currentLocation);
// const secondLink = new URL(currentLocation);

// map.set(firstLink, { desciption: "firstLink" });
// map.set(secondLink, { desciption: "secondLink" });

// console.log(map.get(firstLink).desciption);
// console.log(map.get(secondLink).desciption);

// 3. 遍历map
const directory = new Map();
directory.set("Yoshi", "+81 26 6462");
directory.set("Kuma", "+81 22 6562");
directory.set("Hiro", "+81 33 6452");

for(let item of directory) {
    console.log(item[0] !== null, "Key:" + item[0]);
    console.log(item[1] !== null, "Value:" + item[1]);
}

for(let key of directory.keys()) {
    console.log(key !== null, "Key:" + key);
    console.log(directory.get(key) != null, "Value:" + directory.get(key));
}

for(let value of directory.values()) {
    console.log(value !== null, "Value:" + value);
}

