var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Model = /** @class */ (function () {
    function Model() {
    }
    Model.prototype.saveProductToLocalStorage = function (product) {
        var _a;
        var productsLocalStorage = JSON.parse((_a = localStorage.getItem("products")) !== null && _a !== void 0 ? _a : "[]");
        var newProductsLocalstorage = __spreadArray(__spreadArray([], productsLocalStorage, true), [product], false);
        localStorage.setItem("products", JSON.stringify(newProductsLocalstorage));
    };
    return Model;
}());
export default Model;
/*salvar no localstorage do navegador:
-> tudo que retorna do local storage é como string, então temos que dar um JSON.parse na hora de pegar para poder manipular no javascript
-> significado ?? - se o ítem for nulo vai printar a oq colocarmos entre parênteses, pq a função JSON.parse não aceita nulo, no caso estamos
    printando um array vazio, ai não quebra
-> pra salvar no localstorage tem que converter de volta pra string por isso o: JSON.stringify

localStorage:
-> salvar item: let myItem = localStorage.getItem(key);
-> atualizar item: localStorage.removeItem(key);;
-> excluir item: localStorage.removeItem(key);*/
