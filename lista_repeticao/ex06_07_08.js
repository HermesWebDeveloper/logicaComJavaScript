// 6) Leia a idade de 20 pessoas e exiba a soma das idades.
// 7) Leia a idade de 20 pessoas e exiba a média das idades.
// 8) Leia a idade de 20 pessoas e exiba quantas pessoas são maiores de idade.

const {input} = require("../utils")

function maiorIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

async function main() {
    let idade, soma = 0, qntd = 0, maiores = 0;
    for(i = 0; i < 5; i++) {
        idade = Number(await input(`Digite a idade da ${i+1}º pessoa: `));
        soma += idade;
        qntd ++;
        if (maiorIdade(idade)) maiores++;
    }
    
    let media = soma/qntd;

    console.log("A soma das idades é: " + soma);
    console.log("A média das idades é: " + media);
    console.log("Existem " + maiores + " pessoas com 18 ou mais anos de idade")
}

main()