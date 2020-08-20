const orderController=require('../controllers/order.controller')


module.exports = app => {
    // app.post('/api/products/getip', productController.getIP)
    app.get("/api/orders/", orderController.returnAll)
    // app.get("/api/orders/:device", orderController.getOrder)
    app.post("/api/orders", orderController.createOne)
    app.get("/api/orders/:_id", orderController.returnOne)
    app.put("/api/orders/:_id", orderController.updateOne)
    app.delete("/api/orders/:_id", orderController.deleteOne)
}