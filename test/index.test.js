const { describe, expect, it } = require('@jest/globals')
const ServicoExercicio = require("../src/services/exercicios")

const servico = new ServicoExercicio()

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

        const result = servico.Somar(1, 2)
        expect(result).toBe(3);
    })

    it('Should sum two numbers', () => {

        const result = servico.Somar(-3, 8)
        expect(result).toBe(5);
    })

    it('Should sum two numbers', () => {

        const result = servico.Somar(2, -3)
        expect(result).toBe(-1);
    })

    it('Should sum two numbers', () => {

        const result = servico.Somar(-2.1, 3.1)
        expect(result).toEqual(1);
    })

})

describe('Testes do segundo exercício', () => {

    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });

    it('Should calculate the salary', () => {

        const result = servico.Salario(50, 25)
        expect(result).toEqual(1250)
    })

    it('Should calculate the salary', () => {

        const result = servico.Salario(75.8, 30)
        expect(result).toEqual(2274)
    })

    it('Should calculate the salary', () => {

        const result = servico.Salario(38, 84.5)
        expect(result).toEqual(3211)
    })

    it('Should calculate the salary', () => {

        const result = servico.Salario(40.5, 80.5)
        expect(result).toEqual(3260.25)
    })
})

describe('Testes do terceiro exercício', () => {

    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });

    it('Should calculate the average weight of 5 people', () => {

        const result = servico.MediaPeso5Pessoas(78, 63, 52, 80, 97)
        expect(result).toEqual(74)
    })

    it('Should calculate the average weight of 5 people', () => {

        const result = servico.MediaPeso5Pessoas(80.5, 59.2, 104.8, 69, 97.8)
        expect(result).toEqual(82.26)
    })

    it('Should calculate the average weight of 5 people', () => {

        const result = servico.MediaPeso5Pessoas(120.6, 98, 116.5, 27, 147.9)
        expect(result).toEqual(102)
    })

    it('Should calculate the average weight of 5 people', () => {

        const result = servico.MediaPeso5Pessoas(20, 22, 28, 27, 15)
        expect(result).toEqual(22.4)
    })
})

describe('Testes do quarto exercício', () => {

    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });

    it('Should convert Celsius to Fahrenheit', () => {

        const result = servico.Trans_Celsius(47)
        expect(result).toEqual(116.6)
    })

    it('Should convert Celsius to Fahrenheit', () => {

        const result = servico.Trans_Celsius(-12.5)
        expect(result).toEqual(9.5)
    })

    it('Should convert Celsius to Fahrenheit', () => {

        const result = servico.Trans_Celsius(-50)
        expect(result).toEqual(-58)
    })

    it('Should convert Celsius to Fahrenheit', () => {

        const result = servico.Trans_Celsius(100.5)
        expect(result).toEqual(212.9)
    })
})

describe('Testes do quinto exercício', () => {

    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });

    it('Should convert Miles to Km', () => {

        const result = servico.Trans_Milha(80)
        expect(result).toEqual(128.7472)
    })

    it('Should convert Miles to Km', () => {

        const result = servico.Trans_Milha(25.5)
        expect(result).toEqual(41.03817)
    })

    it('Should convert Miles to Km', () => {

        const result = servico.Trans_Milha(122)
        expect(result).toEqual(196.33948)
    })

})

describe('Testes do sexto exercício', () => {

    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });

    it('Should transform seconds to hh:mm:ss', () => {

        const expected = `duração 1 h, 4 m, 10 s `
        const result = servico.Trans_Tempo(3850)
        expect(result).toEqual(expected)
    })

    it('Should transform seconds to hh:mm:ss', () => {

        const expected = `duração 0 h, 8 m, 20 s `
        const result = servico.Trans_Tempo(500)
        expect(result).toEqual(expected)
    })

    it('Should transform seconds to hh:mm:ss', () => {

        const expected = `duração 138 h, 53 m, 20 s `
        const result = servico.Trans_Tempo(500000.3)
        expect(result).toEqual(expected)
    })
})

describe('Testes do setimo exercício', () => {

    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });

    it('Should convert Km to meters and centimeters', () => {

        const expected = `em metros: 5000, em centimetros: 500000`
        const result = servico.Trans_km(5)
        expect(result).toEqual(expected)
    })

    it('Should convert Km to meters and centimeters', () => {

        const expected = `em metros: 1500, em centimetros: 150000`
        const result = servico.Trans_km(1.5)
        expect(result).toEqual(expected)
    })

    it('Should convert Km to meters and centimeters', () => {

        const expected = `em metros: 800, em centimetros: 80000`
        const result = servico.Trans_km(0.8)
        expect(result).toEqual(expected)
    })
})

describe('Testes do oitavo exercício', () => {

    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    // Executado após TODOS os testes
    afterAll(() => {
        console.info('Encerrados os testes');
    });

    it('Should do the multiplication table', () => {
        
    })
})