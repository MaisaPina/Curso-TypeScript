import Controller from "./controller.js";
import Model from "./model.js";
import View from "./view.js";
//criar instancia
const ModelInstance = new Model();
const ControllerInstance = new Controller(ModelInstance);
const ViewInstance = new View(ControllerInstance);
const cadastrar = document.getElementById('cadastrar');
const createProduct = document.getElementById('product-list');
const nameProduct = document.getElementById('name');
const brandProduct = document.getElementById('brand');
const priceProduct = document.getElementById('price');
const categoryProduct = document.getElementById('category');
const activeProduct = document.getElementById('active');
const quantifyProduct = document.getElementById('quantify');
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
cadastrar === null || cadastrar === void 0 ? void 0 : cadastrar.addEventListener('click', function () {
    cadastrarClick;
});
function cadastrarClick() {
    var _a;
    (_a = createProduct) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", ViewInstance.ListenClickButton);
    ModelInstance.saveProductToLocalStorage(product);
}
//funcao do click
cadastrarClick();
//a magica acontece aqui
