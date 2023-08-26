const { describe, expect, it } = require('@jest/globals')
const { somar } = require('../exercicios/ex1.js')
 
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
})