const express = require('express');
const controller = require("../controllers/products.controller")
const router = express.Router();

// Devuelve el listado completo de productos en JSON
router.get("/", controller.getAllProducts);

// Devuelve el detalle de un producto específico
router.get("/:id", controller.getProductById);

// Registra un nuevo producto recibiendo JSON en el body
router.post("/", controller.createProduct);

// Actualiza los datos de un producto existente
router.put("/:id", controller.updateProduct);

// Elimina un producto por su ID
router.delete("/:id", controller.deleteProduct);



module.exports = router;