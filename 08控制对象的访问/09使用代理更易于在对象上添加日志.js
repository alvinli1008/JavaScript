function makeLoggable(target) {
    return new Proxy(target, {
        get: (target, property) => {
            console.log('reading '+ property)
            return target[property]
        },
        set: (target, property, value) => {
            console.log('writing value ' + value + 'to: ' + property)
            target[property] = value
        }
    })
}

let ninja = { name: 'Yoshi'}
ninja = makeLoggable(ninja)

console.log(ninja.name)
