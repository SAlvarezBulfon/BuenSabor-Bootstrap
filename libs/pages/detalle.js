import { getOneProduct, getProductInCategory } from "../service/producto.js";


const id = new URLSearchParams(window.location.search).get("id");
//inicializar elementos

const product_image = document.getElementById("product-image");
const product_title = document.getElementById("product-title");
const product_price = document.getElementById("product-price");
const product_description = document.getElementById("product-description");

const  productosRelacionadosContainer = document.getElementById("productos-relacionados");

const fillProductosRelacionados = async (category) => {
    const products = await getProductInCategory(category);

    products.forEach(product => {
        //crear elemento
        productosRelacionadosContainer.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img style="min-height:300px; max-height: 300px;" class="card-img-top" src="${product.image}" alt="${product.category}">
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">${product.title}</h5>
                <span>${product.price}</span>
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center d-flex gap-1 align-items-center justify-content-center">
                    <a href="/detalle.html?id=${product.id}" class="btn btn-outline-secondary mt-auto">Ver más</a>
                    <a href="#" class="btn btn-outline-success mt-auto">Añadir al carrito</a>
                </div>
            </div>
          </div>
        </div>
        `;
    });
}
const fillProduct = async () => {
    const product = await getOneProduct(id);
   if(product){
    product_image.src = product.image;
    product_title.textContent = product.title;
    product_price.textContent = product.price;
    product_description.textContent = product.description;

    fillProductosRelacionados(product.category);

   }
}

fillProduct();