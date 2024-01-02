import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserCreateDTO {
  @ApiProperty({ description: 'Nome completo do usuario' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Username do usuario' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'Senha do usuario' })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;
}
