import React, {useEffect, useState} from 'react';
import Botao from "./components/botao";
import Numero from './components/numero';

function App() {
  /*estado e não uma variável, usado para renderizar*/
  /*useState = primeiro estado(contador), segundo variável(setContador)*/
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  /*função*/
  function calcular(){
    
  }

  // useEffect(()=>{
  //   if(contador % 2 === 0) alert("Este número é PAR")
  // },[contador]);

  return (
    <div className='div-calculadora'>
      {/* <p>{contador}</p> */}
      <Numero>{num1}</Numero>
      <div>
      <Botao onClick={calcular} texto="7"></Botao>
      <Botao onClick={calcular} texto="8"></Botao>
      <Botao onClick={calcular} texto="9"></Botao>
      <Botao onClick={calcular} texto="\"></Botao>
      </div>
      <div>
      <Botao onClick={calcular} texto="4"></Botao>
      <Botao onClick={calcular} texto="5"></Botao>
      <Botao onClick={calcular} texto="6"></Botao>
      <Botao onClick={calcular} texto="x"></Botao>
      </div>
      <div>
      <Botao onClick={calcular} texto="1"></Botao>
      <Botao onClick={calcular} texto="2"></Botao>
      <Botao onClick={calcular} texto="3"></Botao>
      <Botao onClick={calcular} texto="+"></Botao>
      </div>
      <div>
      <Botao onClick={calcular} texto="0"></Botao>
      <Botao onClick={calcular} texto="."></Botao>
      <Botao onClick={calcular} texto="="></Botao>
      <Botao onClick={calcular} texto="-"></Botao>
      </div>
    </div>
  );
}

export default App;
