function somar(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor inserir números válidos")
    }
    return num1 + num2
}

module.exports = { somar }