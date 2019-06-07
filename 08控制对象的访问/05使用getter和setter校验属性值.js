function Ninja () {
    let _skillLevel = 0;

    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            return _skillLevel;
        },
        set: (value) => {
            if(!Number.isInteger(value)) {
                throw new TypeError ('Skill level should be a number')
            }
            _skillLevel = value;
        }
    })
}

const ninja = new Ninja()
ninja.skillLevel = 10;
console.log(ninja.skillLevel)

try {
    ninja.skillLevel = 'Great'
    fail('should not be here')
} catch {
    pass('setting a non-integer value throws an exception')
}
