"use strict";
// function soma(n1:number, n2:number){
//   return (n1 + n2).toString();
// }
// const elementoTitulo = document.getElementById("title");
// if (elementoTitulo !== null){
//   elementoTitulo.innerText = soma(2,3);
// } 
const resultado = document.getElementById("resultado");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const somaBotao = document.getElementById("calcularsoma");
const subtracaoBotao = document.getElementById("calcularsubtracao");
const multiplicacaoBotao = document.getElementById("calcularmultiplicacao");
const divisaoBotao = document.getElementById("calculardivisao");
const containerResultado = document.getElementById("container-resultado");
somaBotao === null || somaBotao === void 0 ? void 0 : somaBotao.addEventListener("click", renderizarResultadoSoma);
subtracaoBotao === null || subtracaoBotao === void 0 ? void 0 : subtracaoBotao.addEventListener("click", renderizarResultadoSubtracao);
multiplicacaoBotao === null || multiplicacaoBotao === void 0 ? void 0 : multiplicacaoBotao.addEventListener("click", renderizarResultadoMultiplicacao);
divisaoBotao === null || divisaoBotao === void 0 ? void 0 : divisaoBotao.addEventListener("click", renderizarResultadoDivisao);
function calcularsoma() {
    const valor1 = parseInt(num1.value);
    const valor2 = parseInt(num2.value);
    const result = valor1 + valor2;
    return result.toString();
}
function calcularsubtracao() {
    const valor1 = parseInt(num1.value);
    const valor2 = parseInt(num2.value);
    const result = valor1 - valor2;
    return result.toString();
}
function calcularmultiplicacao() {
    const valor1 = parseInt(num1.value);
    const valor2 = parseInt(num2.value);
    const result = valor1 * valor2;
    return result.toString();
}
function calculardivisao() {
    const valor1 = parseInt(num1.value);
    const valor2 = parseInt(num2.value);
    const result = valor1 / valor2;
    return result.toString();
}
function renderizarResultadoSoma() {
    const resultValue = document.createElement("p");
    resultValue.innerText = calcularsoma();
    document.body.appendChild(resultValue);
}
function renderizarResultadoSubtracao() {
    const resultValue = document.createElement("p");
    resultValue.innerText = calcularsubtracao();
    document.body.appendChild(resultValue);
}
function renderizarResultadoMultiplicacao() {
    const resultValue = document.createElement("p");
    resultValue.innerText = calcularmultiplicacao();
    document.body.appendChild(resultValue);
}
function renderizarResultadoDivisao() {
    const resultValue = document.createElement("p");
    resultValue.innerText = calculardivisao();
    document.body.appendChild(resultValue);
}
