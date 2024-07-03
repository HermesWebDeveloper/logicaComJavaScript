const readline = require('readline');

// Função para ler a entrada do usuário
function input(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Outra função exemplo
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

// Exportar todas as funções
module.exports = {
    input,
    sayHello
};