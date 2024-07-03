// . Escreva um algoritmo em PORTUGOL que leia um número e informe se ele é divisível por 10, por 5 ou por 2 ou se não é divisível por nenhum deles.

const {input} = require("../utils");

function divisivel(dividendo, divisor) {
    if (dividendo % divisor == 0) {
        return true;
    } else {
        return false;
    }
}

async function main() {
    let num = Number(await input("Diigite um número: "))

    if (divisivel(num, 10) || divisivel(num, 5) || divisivel(num, 2)) {
        console.log("O número é divisível por 10, 5 ou 2!!")
    } else {
        console.log("O número NÃO É divisível por 10, 5 ou 2.")
    }
}

main()