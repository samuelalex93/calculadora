describe("Suite de teste de Multiplicação", function () {
  var Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 18 para 6 e 3', function () {
    expect(Calculadora.multiplicar(6, 3)).toEqual(18);
  });

  it("deve retornar 18 para '6' '3' no modo string", function () {
    expect(Calculadora.multiplicar('6', '3')).toEqual(18);
  });

  it('deve retornar 12.5 para 4.5 e 3', function () {
    expect(Calculadora.multiplicar(4.5, 3)).toEqual(13.5);
  });

  it('deve retornar 0 quando valor 2 não for valido', function () {
    expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
  });
});