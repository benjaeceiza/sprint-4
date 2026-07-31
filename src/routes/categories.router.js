const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories.controller');


// Trae todas las categorias
router.get('/', categoryController.getAllCategories);

// Trae los detalles de una categoria 
router.get('/:id', categoryController.getCategoryById);

// Registra una nueva categoria
router.post('/', categoryController.createCategory);

// Modifica una categoria
router.put('/:id', categoryController.updateCategory);

// Elimina una categorias
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;