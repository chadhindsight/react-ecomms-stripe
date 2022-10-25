// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

// the ids corresponds to the price ids on stripe
const productsArray = [
    {
        id: "price_1LwWeqGimAM5IWJjrUNqjrrB",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1LwWgnGimAM5IWJjUzg6VUDl",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1LwWvhGimAM5IWJjhOTlgvKX",
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