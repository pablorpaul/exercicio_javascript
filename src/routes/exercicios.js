const express = require('express')
const ControllerExercicio = require('../controllers/exercicios')

const controller = new ControllerExercicio()
const router = express.Router()
router.post('/api/exercicio1', controller.Somar)

router.post('/api/exercicio2', controller.Salario)

router.post('/api/exercicio3', controller.MediaPeso5Pessoas)

router.post('/api/exercicio4', controller.Trans_Celcius)

router.post('/api/exercicio5', controller.Trans_Milha)

router.post('/api/exercicio6', controller.Trans_Tempo)

router.post('/api/exercicio7', controller.Trans_km)

router.post('/api/exercicio8', controller.Tabuada)

router.post('/api/exercicio9', controller.CalcularMedia)

router.post('/api/exercicio10', controller.CalcularIMC)

router.post('/api/exercicio11', controller.Calculadora)

module.exports = router