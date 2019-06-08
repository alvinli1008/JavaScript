// async(function* () {
//     try{
//         const ninjas = yield getJSON("ninjas.json");
//         const missions = yield getJSON(ninjas[0].missionsUrl);
//         const missionDescription = yield getJSON(missions[0].detailsUrl);
//         // 
//     }
//     catch (e) {
//         // 
//     }
// });
// 1.使用生成器函数
function* WeaponGenerator() {  // 通过在关键字function 后面添加星号*定义生成器函数
    yield "Katana";
    yield "Wakizashi";
    yield "Kusarigama";
}
for (let weapon of WeaponGenerator()) {
    console.log(weapon !== undefined, weapon);
}

// 2. 通过迭代器对象控制生成器
function* WeaponGenerator2() {
    yield "Katana";
    yield "Wakizashi";
}

const weaponsIterator = WeaponGenerator2();

const result = weaponsIterator.next();
console.log(typeof result === "object" && result.value ==="Katana" && !result.done, "Katana received!");

const result2 = weaponsIterator.next();
console.log(typeof result2 === "object" && result2.value === "Wakizashi" && !result2.done, "Wakizashi received!");

const result3 = weaponsIterator.next();
console.log(typeof result3 === "object" && result3.value === undefined && result3.done, "There are no more results");

// 使用while循环迭代生成器结果
const weaponsIterator2 = WeaponGenerator2();
let item;
while(!(item = weaponsIterator2.next()).done) {
    console.log(item !== null, item.value);
}

// 使用yield操作符将执行权交给另一个生成器
function* WarriorGenerator() {
    yield "Sun Tzu";
    yield* NinjaGenerator();
    yield "Genghis Khan";
}
function * NinjaGenerator() {
    yield "Hattori";
    yield "Yoshi";
}
for(let warrior of WarriorGenerator()) {
    console.log(warrior !== null, warrior);
}

// 使用生成器生成ID序列
function* IdGenerator() {
    let id = 0;
    while(true) {
        yield ++id;
    }
}

const idIterator = IdGenerator();
const ninja1 = { id: idIterator.next().value };
const ninja2 = { id: idIterator.next().value };
const ninja3 = { id: idIterator.next().value };

console.log(ninja1, ninja2, ninja3);  // { id: 1 } { id: 2 } { id: 3 }

// 向生成器发送数据及从生成器接收数据
function* NinjaGenerator2(action) {
    const imposter = yield ("Hattori " + action);  // 传递回的值将成为yield表达式的返回值 Hanzo
    console.log(imposter);  // Hanzo   2

    yield ("Yoshi (" + imposter + ") " + action);
}
const ninjaIterator = NinjaGenerator2("skulk");

const result4 = ninjaIterator.next();
console.log(result4.value);  // Hattori skulk   1

const result5 = ninjaIterator.next("Hanzo");
console.log(result5.value);  // Yoshi (Hanzo) skulk   3

// 向生成器抛出异常
function* NinjaGenerator3() {
    try {
        yield "Hattori";
        console.error("The expected exception didnt occur");
    } catch(e) {
        console.error(e === "Catch this!", "Aha! We caught an exception");
    }
}
const ninjaIterator3 = NinjaGenerator3();
const res = ninjaIterator3.next();
console.log(res.value);  // Hattori
ninjaIterator3.throw("Catch this!"); //true 'Aha! We caught an exception'





