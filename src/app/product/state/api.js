
// todo: async, await

export function getProducts() {
    return fetch("http://g3.nodesense.ai:7070/api/products")
           .then ( response => response.json() );
}