// 15) Escreva um algoritmo que leia uma sequência de números do usuário e realize a soma desses números. Encerre a execução quando um número negativo for digitado.

const {input} = require("../utils")

async function main() {
    let soma = 0, num = 0;
    do {
        soma += num;
        num = Number(await input("Digite o número: "));
    } while(num >= 0);

    console.log("A soma dos números é: " + soma)
}

main()