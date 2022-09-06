import React, {useEffect, useState} from 'react';
import Botao from "./components/botao";
import Numero from './components/numero';

function App() {
  /*estado e não uma variável, usado para renderizar*/
  /*useState = primeiro estado(contador), segundo (setContador)*/
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  /*função*/
  function valor(valor: string){
    //salvar o numero nos estados
    //quando apertar algum botão de calcular vai passar a salvar os próximos números digitados no outro estado
  }

  function calcular(valor: string){
  //no botão do igual vai mudar o eval do js
  }

  // useEffect(()=>{
  //   if(contador % 2 === 0) alert("Este número é PAR")
  // },[contador]);

  return (
    <div className='div-calculadora'>
      {/* <p>{contador}</p> */}
      <Numero>{num1}</Numero>
      <div className='botao'>
      <Botao onClick={valor} texto="7"></Botao>
      <Botao onClick={valor} texto="8"></Botao>
      <Botao onClick={valor} texto="9"></Botao>
      <Botao onClick={valor} texto="\"></Botao>
      </div>
      <div className='botao'>
      <Botao onClick={valor} texto="4"></Botao>
      <Botao onClick={valor} texto="5"></Botao>
      <Botao onClick={valor} texto="6"></Botao>
      <Botao onClick={valor} texto="x"></Botao>
      </div>
      <div className='botao'>
      <Botao onClick={valor} texto="1"></Botao>
      <Botao onClick={valor} texto="2"></Botao>
      <Botao onClick={valor} texto="3"></Botao>
      <Botao onClick={valor} texto="+"></Botao>
      </div>
      <div className='botao'>
      <Botao onClick={valor} texto="0"></Botao>
      <Botao onClick={valor} texto="."></Botao>
      <Botao onClick={calcular} texto="="></Botao>
      <Botao onClick={valor} texto="-"></Botao>
      </div>
    </div>
  );
}

export default App;
