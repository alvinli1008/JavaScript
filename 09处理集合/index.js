// 1.创建数组的两种基本方法：
const ninjas = ['aaa', 'bbb', 'ccc'];  // 使用数组字面量[]创建数组， 推荐
const samurai = new Array('fff', 'ddd');  // 使用内置Array构造函数创建数组

// 2.在数组两端添加、删除元素
// push  pop  unshift  shift  // 后两种方法不推荐 
// delete ninjias[1]  // 使用delete 操作符删除元素  // 删除元素后是undefined

// eg:
ninjas.push('zzz');
ninjas.unshift('ddf');

// 3.splice可以完成删除、插入元素  两个参数： 起始索引， 移除的元素个数
var removedItems = ninjas.splice(1, 1);  // 使用内置的splice方法从索引1开始， 删除1个元素

// 从索引1开始， 移除2个元素，然后添加三个元素： 
removedItems = ninjas.splice(1, 2, 'Yoshi', 'Mochizuki', 'Momochi')

