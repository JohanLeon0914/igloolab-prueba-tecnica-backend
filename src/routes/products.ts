import { Router } from 'express';
import { body } from 'express-validator';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/productsController';

const router = Router();

router.get('/', getProducts);
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').isDecimal().withMessage('Valid price required'),
    body('image').isURL().withMessage('Debe ser una URL válida')
  ],
  createProduct
);
router.patch(
  '/:id',
  [
    body('name').optional().isString(),
    body('description').optional().isString(),
    body('price').optional().isDecimal(),
    body('image').optional().isURL(),
  ],
  updateProduct
);
router.delete('/:id', deleteProduct);
router.get('/:id', getProductById);

export default router;