function soma (n1,n2){
  return n1+n2
}

function subtracao(n1,n2){
  return n1-n2
}

function multiplicacao(n1,n2){
  return n1*n2
}

function divisao(n1,n2){
  return n1/n2
}

n1 = +(prompt("Insira o primeiro numero"))
n2 = +(prompt("Insira o segundo numero"))

soma(n1,n2),subtracao(n1,n2),multiplicacao(n1,n2),divisao(n1,n2)

console.log(`A soma deu:${soma(n1,n2)}, a subtração deu :${subtracao(n1,n2)}, a multiplicação deu ${multiplicacao(n1,n2)}, e a divisão deu ${divisao(n1,n2)}.`)
