import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserAddRoleDTO {
  @ApiProperty({ description: 'Codigo da roles' })
  _id: string;

  @ApiProperty({ description: 'Nome da roles' })
  roles: string[];
}
