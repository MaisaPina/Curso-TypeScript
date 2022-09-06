import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type NumeroProps = {
  children: React.ReactNode;
};

export default function Numero(props: NumeroProps){
  return <p>{props.children}</p>;
};