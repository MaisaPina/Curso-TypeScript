// function soma(n1:number, n2:number){
//   return (n1 + n2).toString();
// }


// const elementoTitulo = document.getElementById("title");

// if (elementoTitulo !== null){
//   elementoTitulo.innerText = soma(2,3);
// } 


const resultado = document.getElementById("resultado");
const num1:HTMLElement | null = document.getElementById("num1");
const num2:HTMLElement | null = document.getElementById("num2");
const somaBotao = document.getElementById("calcularsoma");
const subtracaoBotao = document.getElementById("calcularsubtracao");
const multiplicacaoBotao = document.getElementById("calcularmultiplicacao");
const divisaoBotao = document.getElementById("calculardivisao");
const containerResultado = document.getElementById("container-resultado");

somaBotao?.addEventListener("click", renderizarResultadoSoma);
subtracaoBotao?.addEventListener("click", renderizarResultadoSubtracao);
multiplicacaoBotao?.addEventListener("click", renderizarResultadoMultiplicacao);
divisaoBotao?.addEventListener("click", renderizarResultadoDivisao);

function calcularsoma(){
  const valor1 = parseInt((num1 as HTMLInputElement).value);
  const valor2 = parseInt((num2 as HTMLInputElement).value);
  const result = valor1 + valor2;
  return result.toString();
}
function calcularsubtracao(){
  const valor1 = parseInt((num1 as HTMLInputElement).value);
  const valor2 = parseInt((num2 as HTMLInputElement).value);
  const result = valor1 - valor2;
  return result.toString();
}
function calcularmultiplicacao(){
  const valor1 = parseInt((num1 as HTMLInputElement).value);
  const valor2 = parseInt((num2 as HTMLInputElement).value);
  const result = valor1 * valor2;
  return result.toString();
}
function calculardivisao(){
  const valor1 = parseInt((num1 as HTMLInputElement).value);
  const valor2 = parseInt((num2 as HTMLInputElement).value);
  const result = valor1 / valor2;
  return result.toString();
}

function renderizarResultadoSoma(){
  const resultValue = document.createElement("p");
  resultValue.innerText = calcularsoma();
  document.body.appendChild(resultValue);
}
function renderizarResultadoSubtracao(){
  const resultValue = document.createElement("p");
  resultValue.innerText = calcularsubtracao();
  document.body.appendChild(resultValue);
}
function renderizarResultadoMultiplicacao(){
  const resultValue = document.createElement("p");
  resultValue.innerText = calcularmultiplicacao();
  document.body.appendChild(resultValue);
}
function renderizarResultadoDivisao(){
  const resultValue = document.createElement("p");
  resultValue.innerText = calculardivisao();
  document.body.appendChild(resultValue);
}