import React, {useState} from 'react';
import Botao from "./components/botao";

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

  return (
    <div>
      <p>{contador}</p>
      <Botao onClick={diminuir} texto="Diminuir"></Botao>
      <Botao onClick={aumentar} texto="Aumentar"></Botao>
    </div>
  );
}

export default App;
