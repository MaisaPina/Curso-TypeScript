import React, {useEffect, useState} from 'react';
import Botao from "./components/botao";
import Numero from './components/numero';
import './index.css';

function App() {
  /*estado e não uma variável, usado para renderizar*/
  //criando estados para salvar os digitos do usuário
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [resultado, setResultado] = useState("0");

  /*função*/
  function addvalor(valor: string){
    //salvar o numero nos estados
    //salvando no primeiro estado 'num1'
      setNum1(num1 + valor);
  }

  function calcular(valor: string){
    //no botão do igual vai colocar o eval do js
    
  }

  function operacao(valor: string){
    setNum1(num1 + valor);
  }

  function apagar(valor: string){
    setNum1("0");
    setNum2("");
  }

  // useEffect(()=>{
  //   if(contador % 2 === 0) alert("Este número é PAR")
  // },[contador]);

  return (
    <div className='div-calculadora'>
      {/* <p>{contador}</p> */}
      <Numero>{num1}</Numero>
      <div className='botao'>
      <Botao onClick={addvalor} texto="7"></Botao>
      <Botao onClick={addvalor} texto="8"></Botao>
      <Botao onClick={addvalor} texto="9"></Botao>
      <Botao onClick={operacao} texto="\"></Botao>
      </div>
      <div className='botao'>
      <Botao onClick={addvalor} texto="4"></Botao>
      <Botao onClick={addvalor} texto="5"></Botao>
      <Botao onClick={addvalor} texto="6"></Botao>
      <Botao onClick={operacao} texto="x"></Botao>
      </div>
      <div className='botao'>
      <Botao onClick={addvalor} texto="1"></Botao>
      <Botao onClick={addvalor} texto="2"></Botao>
      <Botao onClick={addvalor} texto="3"></Botao>
      <Botao onClick={operacao} texto="+"></Botao>
      </div>
      <div className='botao'>
      <Botao onClick={addvalor} texto="0"></Botao>
      <Botao onClick={addvalor} texto="."></Botao>
      <Botao onClick={calcular} texto="="></Botao>
      <Botao onClick={operacao} texto="-"></Botao>
      </div>
      <div>
      <Botao onClick={apagar} texto="CE"></Botao>
      </div>
    </div>
  );
}

export default App;
