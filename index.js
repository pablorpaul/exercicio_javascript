import express from 'express'
import { somar } from './exercicios/ex1.js'
import { salario } from './exercicios/ex2.js'
import { mediapeso5pessoas } from './exercicios/ex3.js'
import { trans_celsius } from './exercicios/ex4.js'
import { trans_milha } from './exercicios/ex5.js'
import { trans_tempo } from './exercicios/ex6.js'
import { trans_km } from './exercicios/ex7.js'

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
    const resultado = somar(parseFloat(req.query.num1),
    parseFloat(req.query.num2))

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
    const resultado = mediapeso5pessoas(parseFloat(req.query.peso1), 
        parseFloat(req.query.peso2), 
        parseFloat(req.query.peso3), 
        parseFloat(req.query.peso4), 
        parseFloat(req.query.peso5)
    )

    res.json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio4', (req, res) => {
    const resultado = trans_celsius(parseFloat(req.query.celsius))

    res.json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio5', (req, res) => {
    const resultado = trans_milha(parseFloat(req.query.milha))

    res.json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio6', (req,res) => {
    const resultado = trans_tempo(parseFloat(req.query.segundo))

    res.json({
        message: `resultado: ${resultado}`
    })
})

app.get('/api/exercicio7', (req,res) => {
    const resultado = trans_km(parseFloat(req.query.quilometro))

    res.json({
        message: `resultado: ${resultado}`
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})