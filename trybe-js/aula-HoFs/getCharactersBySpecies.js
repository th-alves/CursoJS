const data = require('./database');

function getCharacterBySpecie(id) {
    return data.characters.find((specie) => specie.speciesId === id);
}

console.log(getCharacterBySpecie(1))