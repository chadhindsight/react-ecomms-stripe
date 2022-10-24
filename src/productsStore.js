// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
    {
        id: "prod_MfsPDXfaSoUz0Z",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "prod_MfsRxcqBRZOzin",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "prod_MfshEgZYOQCm9f",
        title: "Camera",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };