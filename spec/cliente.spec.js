const Cliente = require('../models/cliente');

test('Testando se o objeto cliente tem a propriedade nome', () => {
    let cliente = new Cliente()
    cliente.nome = "Erick"
    expect(cliente.nome).not.toBeUndefined();
});

test('Testando se o objeto cliente tem a propriedade cpf', () => {
    let cliente = new Cliente()
    cliente.cpf = "418.825.350-90"
    expect(cliente.validarCPF(cliente.cpf)).toBe(true);
});

test('Testando cpf undefined', () => {
    let cliente = new Cliente()
    cliente.cpf = undefined
    expect(cliente.validarCPF(cliente.cpf)).toBe(false);
});

