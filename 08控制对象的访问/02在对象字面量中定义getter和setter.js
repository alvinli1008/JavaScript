const leeCollection = {
    lees: ['Yoshi', 'Bruss', 'Kuma'],
    get firstLee () {
        console.log('getting firstLee')
        return this.lees[0];
    },
    set firstLee (value) {
        console.log('setting firstLee')
        this.lees[0] = value;
    }
};

console.log(leeCollection.firstLee)

leeCollection.firstLee === 'chao' && (leeCollection.lees[0] === 'chao');
console.log(leeCollection.firstLee)
