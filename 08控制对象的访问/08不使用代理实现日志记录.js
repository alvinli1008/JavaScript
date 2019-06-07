function Ninja () {
    let _skillLevel = 0;

    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            console.log('skillLevel get method is called')
            return _skillLevel;
        },
        set: value => {
            console.log('skillLevel set method is called')
            _skillLevela = value;
        }
    })
}

const ninja = new Ninja()
ninja.skillLevel
ninja.skillLevel = 4