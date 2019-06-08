// 1.闭包简单例子
var outerValue = "samurai";
var later;

function outerFunction() {
    var innerValue = "ninja";  // 函数外无法访问

    function innerFunction() {
        console.log(outerValue);  // samurai
        console.log(innerValue);  // ninja
    }
    later = innerFunction;  // 将内包函数innerFunction的引用存储在变量later上， 因为later在全局作用域内，所以我们可以对它调用
}
outerFunction();  // 调用outerFunction函数， 创建内部函数innerFunction，并将内部函数赋值给later
later();  // 通过later调用内部函数， 我们不能直接调用内部函数， 因为它的作用域（和innerValue一起）被限制在外部函数outerFunction之内

// 2.使用闭包模拟私有变量
function Ninja() {
    var feints = 0;
    this.getFeints = function() {
        return feints;
    };
    this.feint = function() {
        feints++;
    };
}
var ninja1 = new Ninja();
ninja1.feint();
console.log(ninja1.feints);  // undefined
console.log(ninja1.getFeints());  // 1

var ninja2 = new Ninja();
console.log(ninja2.getFeints());  // 0
