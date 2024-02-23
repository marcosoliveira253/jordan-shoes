console.log("jordan shoes");

const getproducts = async () => {
    const response = await fetch('js/products.json');
    const data = await response.json()
    return data;
}

const generateCard = async () => {

    const products = await getproducts();

    products.map((product) => {
        let card = document.createElement('div');
        card.classList.add('card_produto');

        card.innerHTML = `
        <figure>
            <img
            src="./images/${product.image}"
            alt="${product.product_name}"/>
        </figure>
    
        <div class="card_produto_detalhes">
            <h4>${product.product_name}</h4>
            <h5>${product.product_model}</h5>
        </div>

        <h6>R$ ${product.price}</h6>`

        const listaProdutos = document.querySelector('.lista_produtos');
        listaProdutos.appendChild(card);
    })
}

generateCard();