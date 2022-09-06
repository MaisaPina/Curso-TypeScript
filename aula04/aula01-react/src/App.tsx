import React, {useEffect, useState} from 'react';
import Botao from "./components/botao";
import Numero from './components/numero';

function App() {
  /*estado e não uma variável, usado para renderizar*/
  /*useState = primeiro estado(contador), segundo variável(setContador)*/
  const [contador, setContador] = useState(0);

  /*função*/
  function diminuir(){
    setContador(contador - 1);
  }
  function aumentar(){
    setContador(contador + 1);
  }

  useEffect(()=>{
    if(contador % 2 === 0) alert("Este número é PAR")
  },[contador]);

  return (
    <div>
      {/* <p>{contador}</p> */}
      <Numero>{contador}</Numero>
      <Botao onClick={diminuir} texto="Diminuir"></Botao>
      <Botao onClick={aumentar} texto="Aumentar"></Botao>
    </div>
  );
}

export default App;
