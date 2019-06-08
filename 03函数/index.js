/* JavaScript中对象的几种常用功能:
    1. 对象可通过字面量来创建{}
    var ninja = {};
    2. 对象可以赋值给变量、 数组项、 或其他对象的属性
    ninjaArray.push({});
    ninja.data = {};
    3. 对象可以作为参数传递给函数
    function hide (ninja) {
        ninja.visibility = false;
    }
    hide({});
    4. 对象可以作为函数的返回值
    function returnNewNinja () {
        return {};
    }
    5. 对象能够具有动态创建和分配的属性
    var ninja = {};
    ninja.name = "Hanzo";
*/

/*
函数是第一类对象， 以下功能：
1. 通过字面量创建
function ninjaFunction () {}
2. 赋值给变量， 数组项或其他对象的属性
var ninjaFunction = function () {};
ninjaArray.push(function () {});
ninja.data = function () {};
3 作为函数的参数来传递
function call (ninjaFunction) {
    ninjaFunction();
}
call(function () {});
4. 作为函数的返回值
function returnNewNinjaFunction () {
    return function () {};
};
5. 具有动态创建和分配的属性
    var ninjaFunction = function () {};
    ninjaFunction.ninja = "Hanzo";
 */

 // 回调函数
//  function useless(ninjaCallback) {
//      return ninjaCallback();
//  }

 // 1. 简单的回调函数例子
 var text = 'Dome arigato!';  // 5
 console.log('Before defining functions');  // 1

 function useless(ninjaCallback) {
     console.log('In useless function');  // 3
     return ninjaCallback();
 }

 function getText() {
     console.log('In getText function');  // 4
     return text;  // 5
 }

 console.log('Before making all the calls');  // 2

 console.log(useless(getText), 'The useless function works! ' + text);  // 6
 console.log('After the calls have been made');  // 7

 // 2. 函数作为对象的乐趣
 var ninja = {};
 ninja.name = "hissuke";

 var wieldSword = function() {};
 wieldSword.swordType = "Katana";
 console.log(wieldSword)  // { [Function: wieldSword] swordType: 'Katana' }

// 3. 存储唯一函数集合
var store = {
    nextId: 1,
    cache: {},
    add: function (fn) {
        if(!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
};
function ninja4() {};
store.add(ninja4);
console.log(store.cache);  // { '1': { [Function: ninja4] id: 1 } }

// 4. 自记忆函数
function isPrime(value) {
    if(!isPrime.answers) {
        isPrime.answers = {};
    }
    if(isPrime.answers[value] !== undefined) {
        return isPrime.answers[value];
    }
    var pirme = value !== 0 && value !== 1;
    for (var i = 2; i < value; i++) {
        if(value % i === 0) {
            pirme = false;
            break;
        }
    }
    return isPrime.answers[value] = pirme;
}

console.log(isPrime(5));
console.log(isPrime.answers[5]);
