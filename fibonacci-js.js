function gerarFibonacciEVerificar(numero) {
    // Inicializa a sequência de Fibonacci
    let sequencia = [0, 1];
    
    // Gera a sequência até encontrar um número maior que o informado
    while (sequencia[sequencia.length - 1] < numero) {
        let proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
        sequencia.push(proximo);
    }
    
    // Verifica se o número pertence à sequência
    let pertence = sequencia.includes(numero);
    
    return [sequencia, pertence];
}

// Número a ser verificado (pode ser alterado)
let numero = 21;  // Você pode mudar este valor ou usar prompt() para entrada do usuário

// Gera a sequência e verifica o número
let [sequenciaFibonacci, pertenceSequencia] = gerarFibonacciEVerificar(numero);

// Imprime a sequência gerada
console.log("Sequência de Fibonacci gerada:", sequenciaFibonacci);

// Imprime o resultado da verificação
if (pertenceSequencia) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
