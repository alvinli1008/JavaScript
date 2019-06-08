/*
 函数中两个隐含的参数： arguments 和 this

 arguments参数表示函数调用过程中传递的所有参数
 参数this表示被调用函数的上下文对象
*/

// arguments 参数
function whatever(a, b, c) {
    console.log(arguments[0]);  // 1

    console.log(arguments.length);  // 5
}
whatever(1, 2, 3, 4, 5);

// 使用arguments 参数对所有函数参数执行操作
function sum() {  // 定义没有如何显示定义参数的函数
    var sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum +=arguments[i];
    }
    return sum;
}

console.log(sum(1, 2, 3))  // 6
console.log(sum(1, 2, 3, 4))  // 10


/*
函数调用: 4种方式调用一个函数
1. 作为一个函数(function)------skulk(), 直接被调用
2. 作为一个方法(method)------ninja.skulk(), 关联在一个对象上， 实现面向对象编程。
3. 作为一个构造函数(constructor)-----new Ninja(), 实例化一个新的对象。
4. 通过函数的apply或者call方法------skulk.apply(ninja)或者skulk.call(ninja)。

*/
function skulk(name) {}
function Ninja(name) {}

skulk('Hattori');  // 作为函数调用
(function(who) { return who; }) ('Hattori');

var ninja = {
    skulk: function() {}  
};
ninja.skulk('Hattori');  // 作为ninja对象的一个方法调用

ninja = new Ninja('Hattori');  // 作为构造函数调用

skulk.call(ninja, 'Hattori');  // 通过call方法调用

skulk.apply(ninja, ['Hattori']);  // 通过apply方法调用

// 使用apply和call 方法来设置函数上下文
function juggle() {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    this.result = result;  // 
}
var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1, 2, 3, 4]);
juggle.call(ninja2, 5, 6, 7, 8);

console.log(ninja1);  // { result: 10 }
console.log(ninja2);  // { result: 26 }

// 使用forEach 迭代方法展示如何设置函数上下文
function forEach(list, callback) {
    for (let n = 0; n < list.length; n++) {
        callback.call(list[n], n);
    }
}

var weapons = [ { type: 'shuriken' },
                { type: 'katana'},
                {type: 'nunchucks'}];
forEach(weapons, function(index) {
    console.log(this === weapons[index], "Go the expected value of" + weapons[index].type);
});
