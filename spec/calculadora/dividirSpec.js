describe("Suite de teste de divisão", function () {
  var Calculadora = require('../../src/js/calculadora.js');

  it('deve retornar 2 para 6 e 3', function () {
    expect(Calculadora.dividir(6, 3)).toEqual(2);
  });

  it("deve retornar 2 para '6' '3' no modo string", function () {
    expect(Calculadora.dividir('6', '3')).toEqual(2);
  });

  it('deve retornar 1.5 para 4.5 e 3', function () {
    expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
  });

  it("deve retornar 'ERROR' quando valor 1 quando dividir por 0", function () {
    expect(Calculadora.dividir(0, 10)).toEqual('Erro');
  });

  it('deve retornar 0 quando valor 2 não for valido', function () {
    expect(Calculadora.dividir(10, undefined)).toEqual(0);
  });
});