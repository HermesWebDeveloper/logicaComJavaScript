// Construa um algoritmo em PORTUGOL que determine (imprima) se um dado número N inteiro (recebido através do teclado) é PAR ou ÍMPAR.

const {input} = require("../utils")

async function main() {
    let num = Number(await input("Digite um número. Vamos verificar se ele é par ou ímpar: "))

    if (num % 2 == 0) {
        console.log("É par!!")
    } else {
        console.log("É ímpar!!")
    }
}

main()