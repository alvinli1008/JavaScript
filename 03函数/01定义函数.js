/*
定义函数的方式：
    1.函数声明和函数表达式
    function sam () {  // 函数声明示例
        return 'sam here';
    } 
    function ninja() {  // 函数声明示例
        function hiddenNinja() {
            return 'ninja here';
        }
        return hiddenNinja();
    }
    2.箭头函数
    3.函数构造函数
    4.生成器函数
*/

// 1.
function myFunctionDeclaration() {  // 独立的函数声明
    function innerFunction() {}  // 内部函数声明
}

var myFunc = function () {};  // 函数表达式作为变量声明赋值语句中的一部分
myFunc(function() {  // 函数表达式作为一次函数调用中的参数
    return function () {};  // 函数表达式作为函数返回值
});

(function namedFunctionExpression() {}) ();  // 作为函数调用的一部分， 命名函数表达式会被立即调用

+function() {}();  // 函数表达式可以作为一元操作符的参数立即调用
-function() {}();
!function() {}();
~function() {}();

// 2.
