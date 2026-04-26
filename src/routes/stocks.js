const express = require('express');
const router = express.Router();
const stocksController = require('../controllers/stocksController');

/**
 * @swagger
 * /stocks:
 *   get:
 *     summary: Получить все товары
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
router.get('/', stocksController.getAllStocks);

/**
 * @swagger
 * /stocks/{id}:
 *   get:
 *     summary: Получить товар по его Id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
router.get('/:id', stocksController.getStockById);

/**
 * @swagger
 * /stocks:
 *   post:
 *     summary: Добавить товар
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
router.post('/', stocksController.createStock);

/**
 * @swagger
 * /stocks/{id}:
 *   patch:
 *     summary: Частично обновить товар
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
router.patch('/:id', stocksController.updateStock);

/**
 * @swagger
 * /stocks/{id}:
 *   delete:
 *     summary: Удалить товар
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
router.delete('/:id', stocksController.deleteStock);

module.exports = router;