function calcularValorPedido(valorTotal) {
    const limiteDesconto = 200.00;
    const descontoPercentual = 0.10;
    
    if (valorTotal > limiteDesconto) {
        const desconto = valorTotal * descontoPercentual;
        const valorComDesconto = valorTotal - desconto;
        console.log(`O valor total do pedido com desconto é de R$ ${valorComDesconto.toFixed(2)}, onde o desconto aplicado foi de R$ ${desconto.toFixed(2)}.`);
    } else {
        console.log(`O valor total do pedido é de R$ ${valorTotal.toFixed(2)}.`);
    }
}

// Exemplo de uso
calcularValorPedido(250.00); // O valor total do pedido com desconto é de R$ 225.00, onde o desconto aplicado foi de R$ 25.00.
calcularValorPedido(150.00); // O valor total do pedido é de R$ 150.00.
