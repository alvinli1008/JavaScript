class leecollections {
    constructor () {
        this.lees = [ 'sss', 'eee', 'ddd'];
    }
    get firstlee () {
        return this.lees[0]
    }
    set firstlee (value) {
        this.lees[0] = value
    }
}

const lee = new leecollections() 
console.log(lee.firstlee)

lee.firstlee = 'chao'
console.log(lee.firstlee)