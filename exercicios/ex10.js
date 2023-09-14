function calcularIMC(sexo, altura) {
    var IMC = 0
    
    if(sexo == `H` || sexo == `h`){
        IMC = (72.7*altura)-58
    }else if(sexo == `M` || sexo == `m`){
        IMC = (62.1*altura)-44.7
    }

    return {
        message: `Seu IMC: ${IMC}`
    };
}

module.exports = { calcularIMC }