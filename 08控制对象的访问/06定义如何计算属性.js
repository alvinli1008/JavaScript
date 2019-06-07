'use strict'
const shogun = {
    name: 'Yoshikaga',
    clan: 'Ashikaga',

    get fullTitle () {
        return this.name + ' ' + this.clan
    },

    set fullTitle(value) {
        const segments = value.split(" ")
        this.name = segments[0]
        this.clan = segments[1]
    }
}

console.log(shogun.name)
console.log(shogun.clan)
console.log(shogun.fullTitle)

shogun.fullTitle = "Ieyasa Tokugawa"
console.log(shogun.name)
console.log(shogun.clan)
console.log(shogun.fullTitle)
