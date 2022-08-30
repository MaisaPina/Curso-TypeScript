import { Product } from "../types/product";
import  Model from "./model.js";
import  View from "./view.js";

export default class Controller {
  View: any;
  Model: any;
  constructor(View: View, Model: Model) {
    this.View = View;
    this.Model = Model;
  };

  addProductToList() { /*se método se comunica com o model, pra salvar os dados no model*/
    //resultado renderizado
    const containerResultado = document.getElementById('container-resultado'); 
    /*chamada da função view*/
    this.View.renderProduct();
  };

  //função que gera id único
  generateUniqueId(products: Product[]) {
    const ids = products.map(function (product) {
      return product.id;
    });

    const sortedIds = ids.sort(function (a, b) { /*array pra garantir que vai ser de forma crescente*/
      return a - b; /*fórmula pra sortear os números de forma crescente*/
    });

    const lastId = sortedIds[sortedIds.length - 1]; /*pega o último número*/

    return lastId + 1; /*soma mais 1 no último número*/
  }
}
