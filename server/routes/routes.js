const productController = require('../controllers/product.controller')



module.exports = app => {
    // app.post('/api/products/getip', productController.getIP)
    app.get("/api/products", productController.returnAll)
    app.post("/api/products", productController.createOne)
    app.get("/api/products/:_id", productController.returnOne)
    app.put("/api/products/:_id", productController.updateOne)
    app.delete("/api/products/:_id", productController.deleteOne)
}
