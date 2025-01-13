// Loaie Shalloufi
// Tareq Abu Yunis
// 48-5

// -------------------------------- Modules --------------------------------
const express = require('express');
const { products } = require('./data/data')


// -------------------------- Setting up HTTP server --------------------------
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.listen(port, () => console.log(`App started on http://localhost:${port}/`))


// -------------------------------- Routing --------------------------------
app.get('/', (req, res) => {
    res.send('<div><h1>Homepage</h1><p>Please go to <a href="/products/"> products page.</a></p></div>');
});

app.get('/products/:productPrice', (req, res) => {
    const { productPrice } = req.params;
    // Search for products more expensive than "productPrice"
    const matchingProducts = products.filter((product) => product.price >= Number(productPrice));

    // Send the result if it exists
    if (matchingProducts.length != 0) {
        res.send(matchingProducts);
    } // Otherwise, send an error message.
    else res.status(404).send({"error": `No products more expensive than ${productPrice} were found.`})
});
