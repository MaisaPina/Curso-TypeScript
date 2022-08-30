var Controller = /** @class */ (function () {
    function Controller(View, Model) {
        this.View = View;
        this.Model = Model;
    }
    ;
    Controller.prototype.addProductToList = function () {
        //resultado renderizado
        var containerResultado = document.getElementById('container-resultado');
        /*chamada da função view*/
        this.View.renderProduct();
    };
    ;
    //função que gera id único
    Controller.prototype.generateUniqueId = function (products) {
        var ids = products.map(function (product) {
            return product.id;
        });
        var sortedIds = ids.sort(function (a, b) {
            return a - b; /*fórmula pra sortear os números de forma crescente*/
        });
        var lastId = sortedIds[sortedIds.length - 1]; /*pega o último número*/
        return lastId + 1; /*soma mais 1 no último número*/
    };
    return Controller;
}());
export default Controller;
