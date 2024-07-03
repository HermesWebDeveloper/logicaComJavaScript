// 3) Leia o nome do usuário e escreva o nome dele na tela 10 vezes. 

async function main(){
    const {input} = require("../utils");

    let userName = await input("Digite seu nome: ");
    console.log("Seja bem vindo " + userName + "!");

    for (i = 0; i < 10 ; i++) {
        console.log(userName);
    }
}

main()