const data = require('./database');

function countGender(gender) {
    if(gender === 'M' || gender === 'F'){
        return data.characters.filter((character) => character.gender === gender).length; 
    }else{
        return 'Valor inválido'
    }
}
//Utilizamos o HoFs(High Order Functions) Filter para conseguir filtrar algum objeto específico, e ele nos retornará um array com estes itens;

console.log(countGender('F'))