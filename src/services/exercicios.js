class ServicoExercicio {
    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor inserir números válidos")
        }
        return num1 + num2
    }

    Salario(horatrab, qntdhora) {
        return horatrab * qntdhora
    }

    MediaPeso5Pessoas(peso1, peso2, peso3, peso4, peso5){
        return (peso1 + peso2 + peso3 + peso4 + peso5)/5
    }

    Trans_Celsius(celsius){
        return ((9*celsius+160)/5)
    }

    Trans_Milha(milha){
        return (milha*1.60934)
    }

    Trans_Tempo(segundo){
        const minuto = parseInt((segundo/60)%60)
        const hora = parseInt((segundo/60)/60)
        const sobra_seg = parseInt(segundo%60)
        const resultado = `duração ${hora} h, ${minuto} m, ${sobra_seg} s `
    
        return resultado;
    }

    Trans_km(quilometro){
        const metro = parseFloat(quilometro*1000)
        const cent = parseFloat(quilometro*100000)
    
        return `em metros: ${metro}, em centimetros: ${cent}`
    }

    Tabuada(num){
        const array = new Array()
        var result = 0
        
        for (let index = 1; index < 11; index++) {
            result = index*num
            array[index-1] = `${index} x ${num} = ${result}`  
        }
    
        return {
            message: `resultado: ${array.join(", ")}`
        }
    }

    CalcularMedia(notas, nome) {
        const media = (notas[0] + notas[1] + notas[2])/3
    
        let msg = 0
        if(media >= 7) {
            msg = 'Aprovado'
        } else if (media >= 5) {
            msg = 'Recuperação'
        } else {
            msg = 'Reprovado'
        }
    
        return {
            message: msg,
            media: media
        }
    }

    CalcularIMC(sexo, altura) {
        var IMC = 0
        
        if(sexo == `H` || sexo == `h`){
            IMC = (72.7*altura)-58
        }else if(sexo == `M` || sexo == `m`){
            IMC = (62.1*altura)-44.7
        }
    
        return {
            message: `Seu IMC: ${IMC}`
        }
    }

    Calculadora(oper, num1, num2){

        if(isNaN(num1) || isNaN(num2) || (oper != '+' && oper != '-' && oper != '*' && oper != '/')){
            throw new Error("Insira números válidos e uma operação válida")
        }
    
        var result = 0
    
        if(oper == '+'){
            result = num1 + num2
        }else if (oper == '-'){
            result = num1 - num2
        }else if (oper == '/'){
            result = num1 / num2
        }else if (oper == '*'){
            result = num1 * num2
        }
    
        return {
            message: ` ${num1} ${oper} ${num2} = ${result} `
        }
    
    }

}

module.exports = ServicoExercicio