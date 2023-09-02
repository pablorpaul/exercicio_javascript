const { describe, expect, it } = require('@jest/globals')
const { somar } = require('../exercicios/ex1.js')
const { salario } = require('../exercicios/ex2.js')
const { mediapeso5pessoas } = require('../exercicios/ex3.js')
const { trans_celsius } = require('../exercicios/ex4.js')
const { trans_milha } = require('../exercicios/ex5.js')
const { trans_tempo } = require('../exercicios/ex6.js')
const { trans_km } = require('../exercicios/ex7.js')
 
describe('Testes do primeiro exercício', () => {
    
    // Executado antes de TODOS os testes
    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });
    // Testes
    it('Should sum two numbers', () => {

        const result = somar(1, 2)
        expect(result).toBe(3);
    })

    it('Should sum two numbers', () => {

        const result = somar(-3, 8)
        expect(result).toBe(5);
    })

    it('Should sum two numbers', () => {

        const result = somar(2, -3)
        expect(result).toBe(-1);
    })

    it('Should sum two numbers', () => {

        const result = somar(-2.1, 3.1)
        expect(result).toEqual(1);
    })

    it('Should calculate the salary', () => {

        const result = salario(50, 25)
        expect(result).toEqual(1250)
    })

    it('Should calculate the salary', () => {

        const result = salario(75.8, 30)
        expect(result).toEqual(2274)
    })

    it('Should calculate the salary', () => {

        const result = salario(38, 84.5)
        expect(result).toEqual(3211)
    })

    it('Should calculate the salary', () => {

        const result = salario(40.5, 80.5)
        expect(result).toEqual(3260.25)
    })

    it('Should calculate the average weight of 5 people', () => {

        const result = mediapeso5pessoas(78, 63, 52, 80, 97)
        expect(result).toEqual(74)
    })

    it('Should calculate the average weight of 5 people', () => {

        const result = mediapeso5pessoas(80.5, 59.2, 104.8, 69, 97.8)
        expect(result).toEqual(82.26)
    })

    it('Should calculate the average weight of 5 people', () => {

        const result = mediapeso5pessoas(120.6, 98, 116.5, 27, 147.9)
        expect(result).toEqual(102)
    })

    it('Should calculate the average weight of 5 people', () => {

        const result = mediapeso5pessoas(20, 22, 28, 27, 15)
        expect(result).toEqual(22.4)
    })

    it('Should convert Celsius to Fahrenheit', () => {

        const result = trans_celsius(47)
        expect(result).toEqual(116.6)
    })

    it('Should convert Celsius to Fahrenheit', () => {

        const result = trans_celsius(-12.5)
        expect(result).toEqual(9.5)
    })

    it('Should convert Celsius to Fahrenheit', () => {

        const result = trans_celsius(-50)
        expect(result).toEqual(-58)
    })

    it('Should convert Celsius to Fahrenheit', () => {

        const result = trans_celsius(100.5)
        expect(result).toEqual(212.9)
    })


    it('Should convert Miles to Km', () => {

        const result = trans_milha(80)
        expect(result).toEqual(128.7472)
    })

    it('Should convert Miles to Km', () => {

        const result = trans_milha(25.5)
        expect(result).toEqual(41.03817)
    })

    it('Should convert Miles to Km', () => {

        const result = trans_milha(122)
        expect(result).toEqual(196.33948)
    })

    it('Should transform seconds to hh:mm:ss', () => {

        const expected = `duração 1 h, 4 m, 10 s `
        const result = trans_tempo(3850)
        expect(result).toEqual(expected)
    })

    it('Should transform seconds to hh:mm:ss', () => {

        const expected = `duração 0 h, 8 m, 20 s `
        const result = trans_tempo(500)
        expect(result).toEqual(expected)
    })

    it('Should transform seconds to hh:mm:ss', () => {

        const expected = `duração 138 h, 53 m, 20 s `
        const result = trans_tempo(500000.3)
        expect(result).toEqual(expected)
    })

    it('Should convert Km to meters and centimeters', () => {

        const expected = `em metros: 5000, em centimetros: 500000`
        const result = trans_km(5)
        expect(result).toEqual(expected)
    })

    it('Should convert Km to meters and centimeters', () => {

        const expected = `em metros: 1500, em centimetros: 150000`
        const result = trans_km(1.5)
        expect(result).toEqual(expected)
    })

    it('Should convert Km to meters and centimeters', () => {

        const expected = `em metros: 800, em centimetros: 80000`
        const result = trans_km(0.8)
        expect(result).toEqual(expected)
    })

})