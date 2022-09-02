import { Product } from "../types/product";

export default class Model {
  constructor() {}

  saveProductToLocalStorage(product: Product) {
    const productsLocalStorage = JSON.parse(localStorage.getItem("products") ?? "[]");

    const newProductsLocalstorage = [...productsLocalStorage, product];

    localStorage.setItem("products", JSON.stringify(newProductsLocalstorage));
  }

  //editar o dado

  //excluir o dado
}

/*salvar no localstorage do navegador:
-> tudo que retorna do local storage é como string, então temos que dar um JSON.parse na hora de pegar para poder manipular no javascript
-> significado ?? - se o ítem for nulo vai printar a oq colocarmos entre parênteses, pq a função JSON.parse não aceita nulo, no caso estamos 
    printando um array vazio, ai não quebra
-> pra salvar no localstorage tem que converter de volta pra string por isso o: JSON.stringify

localStorage:
-> salvar item: let myItem = localStorage.getItem(key);
-> atualizar item: localStorage.setItem(key);;
-> excluir item: localStorage.removeItem(key);*/
