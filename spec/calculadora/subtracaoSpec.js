describe("Suite de teste de subtracao", function () {
  var Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 5 para 8 e 3', function () {
    expect(Calculadora.subtrair(8, 3)).toEqual(5);
  });

  it("deve retornar 12 para '9' '-3' no modo string", function () {
    expect(Calculadora.subtrair('9', '-3')).toEqual(12);
  });

  it('deve retornar 3 para 5.5 e 1.5', function () {
    expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4);
  });

  it('deve retornar 0 quando valor 1 não for numérico', function () {
    expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
  });
  it('deve retornar 0 quando valor 2 não for numérico', function () {
    expect(Calculadora.subtrair(10, undefined)).toEqual(0);
  });
});