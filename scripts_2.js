function compararNumeros(a, b) {
    if (a > b) {
        console.log(`O número ${a} é maior que ${b}.`);
    } else if (a < b) {
        console.log(`O número ${b} é maior que ${a}.`);
    } else {
        console.log("Os dois números são iguais.");
    }
}

// Exemplo de uso
compararNumeros(5, 2);  // O número 5 é maior que 2.
compararNumeros(2, 5);  // O número 5 é maior que 2.
compararNumeros(3, 3);  // Os dois números são iguais.
