import Controller from "./controller.js";
import Model from "./model.js";
import View from "./view.js";
//criar instancia
var ViewInstance = new View();
var ModelInstance = new Model();
var ControllerInstance = new Controller(ViewInstance, ModelInstance);
var cadastrar = document.getElementById('cadastrar');
var createProduct = document.getElementById('product-list');
var nameProduct = document.getElementById('name');
var brandProduct = document.getElementById('brand');
var priceProduct = document.getElementById('price');
var categoryProduct = document.getElementById('category');
var activeProduct = document.getElementById('active');
var quantifyProduct = document.getElementById('quantify');
//for�ando dados pra testar localstorage
var product = {
    id: 1,
    name: 'feijao',
    brand: 'Tio Joao',
    price: 8.50,
    category: 'Food',
    active: true,
    quantity: 200
};
//add eventos
cadastrar === null || cadastrar === void 0 ? void 0 : cadastrar.addEventListener('click', function () {
    cadastrarClick;
});
function cadastrarClick() {
    createProduct === null || createProduct === void 0 ? void 0 : createProduct.addEventListener("submit", ViewInstance.ListenClickButton);
    ModelInstance.saveProductToLocalStorage(product);
}
//funcao do click
cadastrarClick();
//a magica acontece aqui
