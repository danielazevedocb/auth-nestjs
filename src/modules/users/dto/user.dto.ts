import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserCreateDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;
}

export type UpdateUserAddRoleDTO = {
  _id: string;
  roles: string[];
};
