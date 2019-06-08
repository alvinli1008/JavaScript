// 1. 显示拒绝promise
const promise = new Promise((resolve, reject) => {
    reject("Explicitly reject a promise!");
});
// promise.then(
//     () => console.log("Happy path, wont be called!"),
//     error => console.log("A promise was explicitly rejected!", error)
// );

// 链式调用catch 方法
promise.then(() => console.log("Happy path, wont be called!"))
        .catch(() => console.log("Promise was also rejected"))

// 创建getJSON promise
function getJSON(url) {
    return new Promise((resolve, reject) => {  // 创建并返回一个新的promise对象
        const request = new XMLHttpRequest();  // 创建一个XMLHttpRequest对象

        request.open("GET", url);  // 初始化请求

        request.onload = function() {  // 注册一个onload方法， 当服务器响应后会被调用
            try {
                if(this.status === 200) {
                    resolve(JSON.parse(this.response));  // 尝试解析JSON字符串， 倘若解析成功， 则执行resolve， 并将解析后的对象作为参数传入
                } else {
                    reject(this.status + " " + this.statusText);
                }
            } catch (e) {
                reject(e.message);
            }
        }

        request.onerror = function() {  // 
            reject(this.status + " " + this.statusText);
        };

        request.send();  // 发送请求
    });
}

// 使用Promise.all等待多个promise
Promise.all([getJSON("data/ninjas.json"),
            getJSON("data/mapInfo.json"),
            getJSON("data/plan.json")]).then(result => {
    const ninjas = result[0], mapInfo = result[1], plan = result[2];    
    console.log(ninjas, mapInfo, plan);
}).catch( err => {
    console.log(err);
});


// 使用Promise.race实现prmise 竞态
Promise.race([getJSON("data/ninjas.json"),
            getJSON("data/mapInfo.json"),
            getJSON("data/plan.json")]).then(result => {
    console.log(result);
}).catch( err => {
    console.log(err);
});
