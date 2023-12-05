const data = require('./database');

function speciesName(){
    return data.species.reduce((prev, curr) => {
        return [...prev, curr.name];
    }, [])
}

console.log(speciesName());