import express from 'express'
import { somar } from './exercicios/ex1.js'
import { salario } from './exercicios/ex2.js'
import { mediapeso5pessoas } from './exercicios/ex3.js'

const app = express()
app.use(express.json())
const port = 3000

app.post('/api/exemplo', (req, res) => {
    const resultado = somar(req.body.num1, req.body.num2)

    res.status(200).json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio1', (req, res) => {
    const resultado = somar(req.query.num1, req.query.num2)

    res.json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio2', (req, res) => {
    const resultado = salario(req.query.horatrab, req.query.qntdhora)

    res.json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio3', (req, res) => {
    const resultado = mediapeso5pessoas(req.query.peso1, 
        req.query.peso2, 
        req.query.peso3, 
        req.query.peso4, 
        req.query.peso5
    )

    res.json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio4', (req, res) => {
    const celsius = parseFloat(req.query.celsius)

    res.json({
        message: `resultado: ${(9*celsius+160)/5}`
    })
})

app.get('/api/exercicio5', (req, res) => {
    const milha = parseFloat(req.query.milha)

    res.json({
        message: `resultado: ${milha*1.60934}`
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})