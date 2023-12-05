const data = require('./database');

function isFighter(){
    data.characters.forEach((character) => {
        if(character.powers.length === 0) {
            character.isFighter = false;
        }else {
            character.isFighter = true;
        }
    })
    return data.characters;
}

console.log(isFighter());