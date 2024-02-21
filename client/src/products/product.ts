export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};