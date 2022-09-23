// a) Uma função que receba 2 números como parâmetros, e, dentro da função, 
// faça a soma das duas entradas e imprima o resultado. Invoque a função e 
// imprima no console o resultado.

let num1 = +(prompt("Digite o primeiro numero"))
let num2 = +(prompt("Digite o segundo numero"))

function somar() {
    soma = num1 + num2
}

somar()

console.log(`O resultado da soma é ${num1} + ${num2} = ${soma}`)

// b) Uma função que recebe 2 números e imprime um booleano que informa se 
// o primeiro número é **maior ou igual** ao segundo.

let primeiro = +(prompt("Digite o primeiro numero"))
let segundo = +(prompt("Digite o segundo numero"))

function comparando() {
    resultado = primeiro >= segundo
}
comparando()

console.log(`O primeiro numero é maior ou igual ao segundo? \n
O primeiro número é ${primeiro} e o segundo é ${segundo}, então o resultado é ${resultado}!`)

// c) Uma função que receba um número e imprima se ele é par ou não

let par = +(prompt("Digite um valor para verificar se é par"))

function parImpar() {
    if (par % 2 === 0) {
        console.log(`${par} é um numero par`)
    } else {
        console.log(`${par} é um numero impar`)
    }
}
parImpar()


// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima
// o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras
// maiúsculas.

tamanhoFrase(prompt("Dgite a frase"))

function tamanhoFrase(frase) {
    console.log(`A mensagem ${frase.length} letras`)
    console.log(frase.toLocaleUpperCase())
}