import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDTO } from '../dto/product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schema/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async execute(data: CreateProductDTO) {
    const produtctExists = await this.productModel.findOne({
      code: data.code,
    });
    if (produtctExists) {
      throw new HttpException('Product already exists', HttpStatus.BAD_REQUEST);
    }
    const product = new this.productModel(data);
    await product.save();

    return product;
  }
}
