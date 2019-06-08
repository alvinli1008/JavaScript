// 理解原型
/*
    在JavaScript中， 对象是属性名与属性值的集合。
    简单创建对象字面量：
    let obj = {
        prop1: 1,  // 简单值赋值（数值、字符串）
        prop2: function() {},  // 函数赋值
        prop3: {}  // 对象赋值
    }
*/

// 1.对象可以通过原型访问其他对象的实现
const yoshi = { aaa: true };
const hattori = { bbb: true };
const kuma = { ccc: true };

Object.setPrototypeOf(yoshi, hattori);  // Object.setPrototypeOf方法， 将对象harrori设置为youshi对象的原型
console.log("aaa" in yoshi);  // true
console.log("bbb" in hattori);  // true
console.log("bbb" in yoshi);  // true

// 2.通过原型方法创建新的实例
function Ninja () {};
Ninja.prototype.swingSword = function() {  // 每个函数都具有内置的原型对象， 我们可以对其自由更改
    return true;
};

const ninja1 = Ninja();  // 作为函数调用Ninja， 验证该函数没有任何返回值
console.log(ninja1);  // undefined

const ninja2 = new Ninja();  // 作为构造函数调用Ninja， 验证不仅创建了新的实例， 并且该实例具有原型上的方法
console.log(ninja2, ninja2.swingSword, ninja2.swingSword());  // Ninja {} [Function] true

// 3.观察初始化过程的优先级
function Ninja () {
    this.swund = false;  // 创建布尔类型的实例变量， 并初始化该变量的默认值为false
    this.swingSword = function () {  // 创建实例方法
        return !this.swund;
    };
}
Ninja.prototype.swingSword = function() {  // 定义一个与实例方法同名的原型方法
    return this.swund;
}

const ninja3 = new Ninja();
console.log(ninja3.swingSword());  // true   实例会隐藏原型中与实例方法重名的方法

// 4.通过原型， 一切都可以在运行时修改
function Ninja() {
    this.swund = true;
}

const ninja4 = new Ninja();
Ninja.prototype.swingSword = function() {  
    return this.swund;
}
console.log(ninja4.swingSword());  // true

Ninja.prototype = {   //尽管完全替代Ninja的构造原型，实例化后Ninja对象仍具有swingSword方法， 因为对象ninja4保持对旧Ninja原型的引用
    pierce: function() {
        return true;
    }
}
console.log(ninja4.swingSword());  // true

const ninja5 = new Ninja();
console.log(ninja5.pierce());  // true
console.log(ninja5.swingSword);  // undefined  // 新创建的ninja5实例拥有新原型的引用， 不具有swingSword方法，仅具有pierce方法

// 5.检查实例的类型与它的constructor
function Ninja7() {}
const ninja7 = new Ninja7();

console.log(typeof ninja7 === "object");  // true
console.log(ninja7 instanceof Ninja7);  // true
console.log(ninja7.constructor === Ninja7);  // true  // constructor属性是创建实例对象的函数的引用

// 6.使用constructor的引用创建新对象
function Ninja8 () {}
const ninja8 = new Ninja8();
const ninja9 = new ninja8.constructor();

console.log(ninja9 instanceof Ninja8);  // true  // 说明新创建的对象ninja9是Ninja8的实例
console.log(ninja8 !== ninja9);  // true  // 两者是截然不同的实例

// 7.使用原型实现继承
function Person() {}
Person.prototype.dance = function() {};

function Ninja10 () {};
Ninja10.prototype = new Person();

const ninja10 = new Ninja10();
console.log(ninja10 instanceof Ninja10);  // true
console.log(ninja10 instanceof Person);  // true
console.log(ninja10 instanceof Object);  // true
console.log(typeof ninja10.dance === "function");  // true

// 8.配置属性
var ninja11 = {};
ninja11.name = "Yoshi";
ninja11.weapon = "Kusarigama";

Object.defineProperty(ninja11, "sneaky", {
    configurable: false,
    enumerable: false,
    value: true,
    writable: true
});

console.log("sneaky" in ninja11);
for (let prop in ninja11) {
    console.log(prop !== undefined, "An enumerated property: " + prop);
}
//true 'An enumerated property: name'
// true 'An enumerated property: weapon'

// 9.解决constructor属性的问题
function Person2() {}
Person2.prototype.dance = function() {};

function Ninja12 () {};
Ninja12.prototype = new Person2();

Object.defineProperty(Ninja12.prototype, "constructor", {
    enumerable: false,
    value: Ninja12,
    writable: true
});

const ninja12 = new Ninja12();
console.log(ninja12.constructor === Ninja12);  // true
for (let prop in Ninja12.prototype) {
    console.log(prop)  // dance
}

