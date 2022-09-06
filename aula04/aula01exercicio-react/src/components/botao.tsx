import React from "react";

/*props é um objeto, tem q tipar*/
type BotaoProps = {
  onClick: ()=> void;
  texto: string;
}

/*componetizando o botão, posso usar na aplicação todo, esse botão*/
export default function Botao(props: BotaoProps){
  return(<button onClick={props.onClick}>{props.texto}</button>)
}