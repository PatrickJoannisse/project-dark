import { EntitySchema } from 'typeorm';
import { Product } from '../entities/product.entity';

export const ProductsSchema = new EntitySchema<Product>({
  name: 'Products',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
    updatedAt: {
      type: Date,
      updateDate: true,
    },
    deletedAt: {
      type: Date,
    },
  },
});