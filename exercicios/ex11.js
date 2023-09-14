function calculadora(oper, num1, num2){

    if(isNaN(num1) || isNaN(num2) || (oper != '+' && oper != '-' && oper != '*' && oper != '/')){
        throw new Error("Insira números válidos e uma operação válida")
    }

    var result = 0

    if(oper = '+'){
        result = num1 + num2
    }else if (oper = '-'){
        result = num1 - num2
    }else if (oper = '/'){
        result = num1 / num2
    }else if (oper = '*'){
        result = num1 * num2
    }

    return {
        message: ` ${num1} ${oper} ${num2} = ${result} `
    }

}

module.exports = { calculadora }