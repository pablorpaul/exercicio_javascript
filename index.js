const express = require('express')
const { somar } = require('./exercicios/ex1.js')
const { salario } = require('./exercicios/ex2.js')
const { mediapeso5pessoas } = require('./exercicios/ex3.js')
const { trans_celsius } = require('./exercicios/ex4.js')
const { trans_milha } = require('./exercicios/ex5.js')
const { trans_tempo } = require('./exercicios/ex6.js')
const { trans_km } = require('./exercicios/ex7.js')
const { tabuada } = require('./exercicios/ex8.js')
const { calcularMedia } = require('./exercicios/ex9.js')
const { calcularIMC } = require('./exercicios/ex10.js')
const { calculadora } = require('./exercicios/ex11.js')

const app = express()
app.use(express.json())
const port = 3000

app.post('/api/exemplo', (req, res) => {
    const resultado = somar(req.body.num1, req.body.num2)

    res.status(200).json({
        message: `resultado: ${resultado}`
    })
})

app.post('/api/exercicio1', (req, res) => {
    try {
        const resultado = somar(parseFloat(req.body.num1),
        parseFloat(req.body.num2))
    
        res.status(200).json({
            message: `resultado: ${resultado}`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Deu ruim"})
        
    }
})

app.get('/api/exercicio2', (req, res) => {
    const resultado = salario(req.query.horatrab, req.query.qntdhora)

    res.status(200).json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio3', (req, res) => {
    const resultado = mediapeso5pessoas(parseFloat(req.query.peso1), 
        parseFloat(req.query.peso2), 
        parseFloat(req.query.peso3), 
        parseFloat(req.query.peso4), 
        parseFloat(req.query.peso5)
    )

    res.status(200).json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio4', (req, res) => {
    const resultado = trans_celsius(parseFloat(req.query.celsius))

    res.status(200).json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio5', (req, res) => {
    const resultado = trans_milha(parseFloat(req.query.milha))

    res.status(200).json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio6', (req,res) => {
    const resultado = trans_tempo(parseFloat(req.query.segundo))

    res.status(200).json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio7', (req,res) => {
    const resultado = trans_km(parseFloat(req.query.quilometro))

    res.status(200).json({
        message: `resultado: ${resultado}`
    })
})

app.post('/api/exercicio8', (req,res) => {
    const resultado = tabuada(parseFloat(req.body.num))

    res.status(200).json(resultado)
})

app.post('/api/exercicio9', (req, res) => {
    const nome = req.body.nome;
    const notas = req.body.notas;

    const result = calcularMedia(notas, nome)
    
    res.status(200).json(result)
})

app.post('/api/exercicio10', (req, res) => {
    const sexo = req.body.sexo;
    const altura = req.body.altura;

    const result = calcularIMC(sexo, altura)

    res.status(200).json(result)
})

app.post('/api/exercicio11', (req, res) => {
    try {
        const oper = req.body.oper
        const num1 = req.body.num1
        const num2 = req.body.num2
    
        const result = calculadora(oper, num1, num2)
    
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Deu ruim"})
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})