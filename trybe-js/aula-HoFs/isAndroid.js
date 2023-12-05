const data = require('./database');

function isAndroid(specie) {
    let names = [];
    if(data.species.some((specieSome) => specieSome.name === specie) === true){
        let findId = data.species.find((findId) => findId.name === specie);

        for (let index = 0; index < data.characters.length; index += 1) {
            if(findId.id === data.characters[index].speciesId){
                names.push(data.characters[index].name)            
            }
        }
    }else {
        console.log('Espécie não encontrada!')
    }
    return names;
}

console.log(isAndroid("Saiyans"))