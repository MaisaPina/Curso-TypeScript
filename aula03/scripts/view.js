//class criada
export default class View {
    constructor(Controller) {
        this.Controller = Controller;
    }
    ;
    //renderizar - função
    renderProduct(product) {
        /*adicionando itens*/
        const productListElement = document.getElementById("product-list");
        if (productListElement) {
            productListElement.innerHTML += `<div class="product-item">${product.name} - R$${product.price} - ${product.quantity}</div>`;
        }
        ;
    }
    addProduct() {
    }
    eventlistenerHandle() {
        const formButtonElement = document.getElementById("cadastrar");
        formButtonElement === null || formButtonElement === void 0 ? void 0 : formButtonElement.addEventListener("click", () => {
            const nameElement = document.getElementById("name");
            const brandElement = document.getElementById("brand");
            const priceElement = document.getElementById("price");
            const categoryElement = document.getElementById("category");
            const activeElement = document.getElementById("active");
            const quantifyElement = document.getElementById("quantify");
            this.renderProduct({
                active: true,
                brand: brandElement.value,
                category: categoryElement.value,
                id: 1,
                name: nameElement.value,
                price: parseInt(priceElement.value),
                quantity: parseInt(quantifyElement.value),
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
