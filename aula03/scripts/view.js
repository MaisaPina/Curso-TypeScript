//class
var View = /** @class */ (function () {
    function View() {
    }
    ;
    //renderizar - fun��o
    View.prototype.renderProduct = function (product) {
        /*adicionando itens*/
        var productListElement = document.getElementById("product-list");
        if (productListElement) {
            productListElement.innerHTML += "<div class=\"product-item\">".concat(product.name, " - R$").concat(product.price, " - ").concat(product.quantity, "</div>");
        }
        ;
    };
    /*clique do bot�o - criar produto*/
    View.prototype.ListenClickButton = function (event) {
        /*submit recarrega a p�gina, pra evitar carregar, linha abaixo (preventDefault)*/
        alert("testando");
        event.preventDefault();
    };
    return View;
}());
export default View;
