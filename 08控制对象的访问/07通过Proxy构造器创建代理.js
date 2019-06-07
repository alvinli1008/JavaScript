const emperor = { name: 'Komei'}
const reprsenttative = new Proxy(emperor, {  // emperor 是目标对象 
    get: (target, key) => {
        return key in target ? target[key] : 'dont bother the emperor'
    },
    set (target, key, value) {
        target[key] = value
    }
})

console.log(emperor.name)  // Komei
console.log(reprsenttative.name)  // Komei

console.log(reprsenttative.nickname)
reprsenttative.nickname = 'leechao'
console.log(reprsenttative.nickname)
