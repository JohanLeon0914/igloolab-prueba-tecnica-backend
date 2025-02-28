import express from 'express';
import cors from 'cors';
import productRoutes from './routes/products';
import { testConnection } from './config/database';

const app = express();

app.use(cors());
app.use(express.json());

// Test DB connection
testConnection();

// Routes
app.use('/products', productRoutes);

export default app;