describe("Suite de teste de adição", function () {
  var Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 5 para 2 e 3', function () {
    expect(Calculadora.adicionar(2, 3)).toEqual(5);
  });

  it('deve retornar 6 para '/9/' '/-3/' no modo string', function () {
    expect(Calculadora.adicionar('9', '-3')).toEqual(6);
  });

  it('deve retornar 5.5 para 2.5 e 3', function () {
    expect(Calculadora.adicionar(2.5, 3)).toEqual(5.5);
  });

  it('deve retornar 0 quando valor 1 não for numérico', function () {
    expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
  });
  it('deve retornar 0 quando valor 2 não for numérico', function () {
    expect(Calculadora.adicionar(10, undefined)).toEqual(0);
  });
});