export default class Controller {
    constructor(Model) {
        this.Model = Model;
    }
    ;
    addProductToList() {
        //resultado renderizado
        const containerResultado = document.getElementById('container-resultado');
        /*chamada da função view*/
        this.View.renderProduct();
    }
    ;
    //função que gera id único
    generateUniqueId(products) {
        const ids = products.map(function (product) {
            return product.id;
        });
        const sortedIds = ids.sort(function (a, b) {
            return a - b; /*fórmula pra sortear os números de forma crescente*/
        });
        const lastId = sortedIds[sortedIds.length - 1]; /*pega o último número*/
        return lastId + 1; /*soma mais 1 no último número*/
    }
}
