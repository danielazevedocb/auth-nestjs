import { Module } from '@nestjs/common';
import { CreateProductUseCase } from './use-case/create-product.usecase';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';
import { ListProductUseCase } from './use-case/list-product.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [CreateProductUseCase, ListProductUseCase],
})
export class ProductModule {}
