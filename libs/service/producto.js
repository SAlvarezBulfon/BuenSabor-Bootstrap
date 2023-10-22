export function getAllProducts() {
    return fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>json)
}

export function getOneProduct(id){
    return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>json)
}

export function getProductInCategory(category){
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.json())
    .then(json=>json)
}