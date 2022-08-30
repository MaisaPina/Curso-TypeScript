import { Product } from "../types/product";

//class
export default class View {
  constructor() {};

  //renderizar - fun��o
  renderProduct(product: Product) {
    /*adicionando itens*/
    const productListElement = document.getElementById("product-list");
    if (productListElement) {
      productListElement.innerHTML += `<div class="product-item">${product.name} - R$${product.price} - ${product.quantity}</div>`;
    };
  }
  
  /*clique do bot�o - criar produto*/
  ListenClickButton(event: SubmitEvent){
    /*submit recarrega a p�gina, pra evitar carregar, linha abaixo (preventDefault)*/
    alert("testando");
    event.preventDefault(); 
  }
}
