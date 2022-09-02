import { Product } from "../types/product";

//class criada
export default class View {
  Controller: any;
  constructor(Controller: any) {
    this.Controller = Controller;
  };

  //renderizar - função
  renderProduct(product: Product) {
    /*adicionando itens*/
    const productListElement = document.getElementById("product-list");
    if (productListElement) {
      productListElement.innerHTML += `<div class="product-item">${product.name} - R$${product.price} - ${product.quantity}</div>`;
    };
  }

  addProduct(){
  
  }

  eventlistenerHandle(){
    const formButtonElement = document.getElementById("cadastrar");

    formButtonElement?.addEventListener("click", () => {
      const nameElement = document.getElementById("name");
      const brandElement = document.getElementById("brand");
      const priceElement = document.getElementById("price");
      const categoryElement = document.getElementById("category");
      const activeElement = document.getElementById("active");
      const quantifyElement = document.getElementById("quantify");

      this.renderProduct({
        active: true,
        brand: (brandElement as HTMLInputElement).value,
        category: (categoryElement as HTMLInputElement).value,
        id: 1,
        name: (nameElement as HTMLInputElement).value,
        price: parseInt((priceElement as HTMLInputElement).value),
        quantity: parseInt((quantifyElement as HTMLInputElement).value),
      });
    });
  }
}





  
  //caso fosse usar o form com o submit:
  // /*clique do botão - criar produto*/
  // ListenClickButton(event: SubmitEvent){
  //   /*submit recarrega a página, pra evitar carregar, linha abaixo (preventDefault)*/
  //   alert("testando");
  //   event.preventDefault(); 
  // }
