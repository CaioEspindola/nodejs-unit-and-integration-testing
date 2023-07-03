/* eslint-disable linebreak-style */
import Carrinho from '../carrinho';
import Item from '../item';

describe('Teste do Carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });
  it('Deve ter itens', () => {
    const item = new Item('banana', 2, 5);
    const item2 = new Item('maça', 0.5, 1);
    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve lançar error ao finalizar compra com carrinho vazio', () => {
    function erroEsperadoCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }
    expect(erroEsperadoCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);
    expect(carrinho.frete).toBe(10);
  });

  it('Deve finalizar a compra com sucesso', () => {
    const item = new Item('banana', 2, 5);
    const item2 = new Item('Mel', 1, 5);
    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 15,
      frete: 10,
      total: 25,
    });
  });
});
