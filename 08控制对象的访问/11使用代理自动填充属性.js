function Folder () {
    return new Proxy({}, {
        get: (target, property) => {
            if(!(property in target)) {
                target[property] = new Folder()
            }
            return target[property]
        }
    });
}

const rootFolder = new Folder()

try {
    rootFolder.ninjiaDir.firstNinjaDir.ninjaFile = 'yoshi.txt'
    console.log('an exception wasnt raised')
} catch(e) {
    console.log('an exception has occurred')
}
