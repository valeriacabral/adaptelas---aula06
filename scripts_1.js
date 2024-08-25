function podeDirigir(idade, possuiCarteira) {
    if (idade >= 18 && possuiCarteira) {
        console.log("Você está apto(a) a dirigir.");
    } else if (idade >= 18 && !possuiCarteira) {
        console.log("Você não está apto(a) a dirigir.");
    } else {
        console.log("Você não está apto(a) a dirigir.");
    }
}

// Exemplo de uso
podeDirigir(20, true);  // Você está apto(a) a dirigir.
podeDirigir(20, false); // Você não está apto(a) a dirigir.
podeDirigir(16, true);  // Você não está apto(a) a dirigir.
