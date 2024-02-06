import { Module } from '@nestjs/common';3
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductSchema } from './schemas/product.schema';
import { Product } from './entities/product.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Product.name,
      schema: ProductSchema
    }]),
  ],
  controllers: [ProductController],
  providers: [
    ProductService
  ],
})
export class ProductModule {}
