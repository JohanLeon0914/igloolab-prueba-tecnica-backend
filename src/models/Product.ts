import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public image!: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: ''
    }
  },
  {
    sequelize,
    tableName: 'products',
    timestamps: false
  }
);

export default Product;