// api.js
// todo: async, await

export function getProducts() {
    return window.fetch("http://localhost:7070/api/products")
           .then ( response => response.json() );
}