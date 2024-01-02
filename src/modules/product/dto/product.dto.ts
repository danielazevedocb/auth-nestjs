import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDTO {
  @ApiProperty({ description: 'Nome do produto' })
  name: string;
  @ApiProperty({ description: 'Codigo do produto' })
  code: string;
  @ApiProperty({ description: 'Descrição do produto' })
  description: string;
  @ApiProperty({ description: 'Preço do produto' })
  price: number;
  @ApiProperty({ description: 'Quantidade do produto' })
  quantity: number;
}
