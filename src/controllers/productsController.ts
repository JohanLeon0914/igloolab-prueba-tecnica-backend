import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Product from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product' });
    }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
  
    try {
      const product = await Product.findByPk(req.params.id);
  
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }

      const updatedProduct = await product.update(req.body);
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Error updating product' });
    }
  };

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        res.status(404).json({ message: 'Producto no encontrado' });
        return;
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el producto' });
    }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        await product.destroy();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product' });
    }
};