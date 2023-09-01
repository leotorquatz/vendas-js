  /***********************************************************************************************************************************
   * Objetivo: programa que auxilia nas vendas                                                                              *
   * Data: 18/08/23                                                                                                                  *
   * Autor: Leonardo Torquato                                                                                                             *
   * Versão: 1.0                                                                                                                     * 
   ***********************************************************************************************************************************/
  var calcularValorVenda = require('./modulo/calculosVendas.js')
  var readline = require('readline');
  
  var entradaDeDados= readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  entradaDeDados.question("Digite o valor da venda: ", function(valorVenda) {
      entradaDeDados.question("Digite uma dessas opções (1, 2, 3 ou 4): ", function(vendas) {
        let valorAtualizado = calcularValorVenda.calcularValorAtualizado(parseFloat(valorVenda), parseInt(vendas))
                  if (valorAtualizado)
                  console.log(valorAtualizado);
              })
    })
  
  function calcularValorAtualizado(valorVenda, vendas) {
    let valorAtualizado;
  
    if (vendas === 1) {
      valorAtualizado = valorVenda - (valorVenda * 0.08);
    } else if (vendas === 2) {
      valorAtualizado = valorVenda - (valorVenda * 0.04);
    } else if (vendas === 3) {
      valorAtualizado = valorVenda - (valorVenda / 2);
    } else if (vendas === 4) {
      const valorAcrescido = (valorVenda * 8) / 100;
      valorAtualizado = (valorAcrescido + valorVenda) / 4;
      console.log("Valor da parcela: R$" + valorAtualizado.toFixed(2));
      console.log("O valor total a ser pago é: R$" + (valorAtualizado * 4).toFixed(2));
    } else {
      console.log("Opção inválida");
      return valorAtualizado;
    }
  
    console.log("Valor atualizado: R$" + valorAtualizado.toFixed(2));
  }
  
  module.exports = {
    calcularValorAtualizado
  };
  