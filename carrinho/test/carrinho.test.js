/* eslint-disable linebreak-style */
import Carrinho from '../carrinho';
import Item from '../item';

describe('Teste do Carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });
});
