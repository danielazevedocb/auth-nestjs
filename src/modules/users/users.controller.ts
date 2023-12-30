import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserUseCase } from './use-case/create-user.usecase';
import { UpdateUserAddRoleDTO, UserCreateDTO } from './dto/user.dto';
import { UpdateAddRoleUserUseCase } from './use-case/update-add-role-user.usecase';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';
import { ListUserUseCase } from './use-case/list-user.usecase';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private updateRolesUseCase: UpdateAddRoleUserUseCase,
    private listUserUseCase: ListUserUseCase,
  ) {}

  @Post('/')
  async create(@Body() data: UserCreateDTO) {
    const result = await this.createUserUseCase.execute(data);
    return result;
  }

  @Get()
  async get() {
    const result = this.listUserUseCase.execute();
    return result;
  }

  @UseGuards(AuthGuard)
  @Put('roles')
  async updateRoles(@Request() request, @Body() data: UpdateUserAddRoleDTO) {
    const result = await this.updateRolesUseCase.execute({
      _id: request.user.sub,
      roles: data.roles,
    });
    return result;
  }
}
