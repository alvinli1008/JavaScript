// 1.在ES6中创建类
class Ninja {
    constructor(name) {
        this.name = name;
    }

    swingSword() {
        return true;
    }
}

var ninja = new Ninja("Yoshi");
console.log(ninja instanceof Ninja);  // true
console.log(ninja.name);  // Yoshi
console.log(ninja.swingSword());  // true

// 2. 在ES6中的静态方法
class Ninja2 {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    swingSword() {
        return true;
    }
    static compare(ninja1, ninja2) {  // 静态方法是类级别的方法
        return ninja1.level - ninja2.level;
    }
}

var ninja1 = new Ninja2("Yoshi", 4);
var ninja2 = new Ninja2("Hattori", 3);
console.log(!("compare" in ninja1) && !("compare" in ninja2));   // true // ninja实例不可访问compare方法
console.log(Ninja2.compare(ninja1, ninja2) > 0);  // true // Ninja2类可访问compare方法
console.log(!("swingSword" in Ninja2));  // true  // Ninja2类不可访问swingSword方法

// 3.在ES6中实现继承
class Person {
    constructor(name) {
        this.name = name;
    }

    dance() {
        return true;
    }
}

class Ninja3 extends Person {
    constructor(name, weapon) {
        super(name);
        this.weapon = weapon;
    }

    wieldWeapon() {
        return true;
    }
}

var person = new Person("Bob");

var ninja3 = new Ninja3("Yoshi", "Wakizashi");