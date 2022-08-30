import Controller from "./controller.js";
import Model from "./model.js";
import View from "./view.js";

//criar instancia
const ViewInstance = new View();
const ModelInstance = new Model();
const ControllerInstance = new Controller(ViewInstance, ModelInstance);

const cadastrar = document.getElementById('cadastrar'); 
const createProduct:HTMLElement | null= document.getElementById('product-list');

const nameProduct:HTMLElement | null= document.getElementById('name'); 
const brandProduct:HTMLElement | null= document.getElementById('brand');
const priceProduct:HTMLElement | null= document.getElementById('price');
const categoryProduct:HTMLElement | null= document.getElementById('category');
const activeProduct:HTMLElement | null= document.getElementById('active');
const quantifyProduct:HTMLElement | null= document.getElementById('quantify');

//forçando dados pra testar localstorage
const product = {
  id: 1,
  name: 'feijao',
  brand: 'Tio Joao',
  price: 8.50,
  category: 'Food',
  active: true,
  quantity: 200

};

//add eventos
cadastrar?.addEventListener('click',function () {
  cadastrarClick
});


function cadastrarClick() {

  (createProduct as HTMLFormElement)?.addEventListener("submit", ViewInstance.ListenClickButton);
  ModelInstance.saveProductToLocalStorage(product);

}

//funcao do click
cadastrarClick();


//a magica acontece aqui