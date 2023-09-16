const ServicoExercicio = require("../services/exercicios")

const servico = new ServicoExercicio()

class ControllerExercicio {
    Somar(req, res){
        try {
            const result = servico.Somar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }

    Salario(req, res){
        const resultado = servico.Salario(req.body.horatrab, req.body.qntdhora)

        res.status(200).json({
            message: `resultado: ${resultado}`
        })
    }

    MediaPeso5Pessoas(req, res){
        const resultado = servico.MediaPeso5Pessoas(parseFloat(req.body.peso1), 
            parseFloat(req.body.peso2), 
            parseFloat(req.body.peso3), 
            parseFloat(req.body.peso4), 
            parseFloat(req.body.peso5)
        )

        res.status(200).json({
            message: `resultado: ${resultado}`
        })
    }

    Trans_Celcius(req, res){
        const resultado = servico.Trans_Celsius(parseFloat(req.body.celsius))

        res.status(200).json({
            message: `resultado: ${resultado}`
        })
    }

    Trans_Milha(req, res){
        const resultado = servico.Trans_Milha(parseFloat(req.body.milha))

        res.status(200).json({
            message: `resultado: ${resultado}`
        })
    }

    Trans_Tempo(req, res){
        const resultado = servico.Trans_Tempo(parseFloat(req.body.segundo))

        res.status(200).json({
            message: `resultado: ${resultado}`
        })
    }

    Trans_km(req, res){
        const resultado = servico.Trans_km(parseFloat(req.body.quilometro))

        res.status(200).json({
            message: `resultado: ${resultado}`
        })
    }

    Tabuada(req, res){
        const resultado = servico.Tabuada(parseFloat(req.body.num))

        res.status(200).json(resultado)
    }

    CalcularMedia(req, res){
        const result = servico.CalcularMedia(req.body.notas, req.body.nome)
    
        res.status(200).json(result)
    }

    CalcularIMC(req, res){
        const result = servico.CalcularIMC(req.body.sexo, req.body.altura)

        res.status(200).json(result)
    }

    Calculadora(req, res){
        try {
            const result = servico.Calculadora(req.body.oper, req.body.num1, req.body.num2)
        
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Deu ruim"})
        }
    }

    

    
}

module.exports = ControllerExercicio