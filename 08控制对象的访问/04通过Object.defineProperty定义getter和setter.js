function Ninja () {
    let _skillLevel = 0;

    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            return _skillLevel;
        },
        set: (value) => {
            _skillLevel = value;
        }
    })
}

const ninja = new Ninja()
console.log(typeof ninja._skillLevel)  // underfined

ninja.skillLevel = 10;
console.log(ninja.skillLevel)