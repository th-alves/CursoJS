const data = require('./database');

function countCharacters() {
    return data.characters.length;
}

console.log(countCharacters());