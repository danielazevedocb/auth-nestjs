import { Body, Controller, Get, Post } from '@nestjs/common';
import { Auth } from '../../decorators/auth.decorators';
import { Role } from '../../decorators/roles.decorators';
import { CreateProductUseCase } from './use-case/create-product.usecase';
import { ListProductUseCase } from './use-case/list-product.usecase';
import { CreateProductDTO } from './dto/product.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private listProductUseCase: ListProductUseCase,
  ) {}

  @Auth(Role.ADMIN)
  @ApiBearerAuth()
  @Post('')
  async create(@Body() data: CreateProductDTO) {
    const result = await this.createProductUseCase.execute(data);
    return result;
  }

  @Auth(Role.USER, Role.ADMIN)
  @ApiBearerAuth()
  @Get('')
  async get() {
    const result = await this.listProductUseCase.execute();
    return result;
  }
}
