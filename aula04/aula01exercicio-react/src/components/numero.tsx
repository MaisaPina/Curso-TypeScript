import React from "react";

type NumeroProps = {
  children: React.ReactNode;
};

export default function Numero(props: NumeroProps){
  return <p>{props.children}</p>;
};