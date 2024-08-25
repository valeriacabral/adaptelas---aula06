function verificarComprimentoString(str) {
    const limite = 20;
    if (str.length > limite) {
        console.log("O limite de caracteres foi excedido.");
    } else if (str.length === limite) {
        console.log("Você atingiu o limite de caracteres.");
    } else {
        console.log("O limite de caracteres ainda não foi excedido...");
    }
}

// Exemplo de uso
verificarComprimentoString("Esta é uma string com exatamente 20 caracteres."); // Você atingiu o limite de caracteres.
verificarComprimentoString("Esta string é muito longa e excede o limite."); // O limite de caracteres foi excedido.
verificarComprimentoString("String curta"); // O limite de caracteres ainda não foi excedido...
