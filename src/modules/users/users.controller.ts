import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserUseCase } from './use-case/create-user.usecase';
import { UserCreateDTO } from './dto/user.dto';
import { UpdateAddRoleUserUseCase } from './use-case/update-add-role-user.usecase';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';
import { ListUserUseCase } from './use-case/getAll-user.usecase';
import { UpdateUserAddRoleDTO } from './dto/update-user-add-role.dto';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetOnUserUseCase } from './use-case/getOne-user.usecase';
import { User } from './models/user.schema';
import { UpdateUserCreateDTO } from './dto/update-user.dto';
import { UpdateUserUseCase } from './use-case/update-user.usecase';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private updateRolesUseCase: UpdateAddRoleUserUseCase,
    private listUserUseCase: ListUserUseCase,
    private getOnUserUseCase: GetOnUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
  ) {}

  @ApiResponse({ status: 400, description: 'Usuario já existir' })
  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @Post('/')
  async create(@Body() data: UserCreateDTO) {
    const result = await this.createUserUseCase.execute(data);
    return result;
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get()
  async get() {
    const result = this.listUserUseCase.execute();
    return result;
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('/:_id')
  async getOn(@Param('_id') _id: string): Promise<User> {
    const result = this.getOnUserUseCase.execute(_id);
    return result;
  }

  @ApiForbiddenResponse({ status: 401, description: 'Acesso negado.' })
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Put('roles')
  async updateRoles(@Request() request, @Body() data: UpdateUserAddRoleDTO) {
    const result = await this.updateRolesUseCase.execute({
      _id: request.user.sub,
      roles: data.roles,
    });
    return result;
  }
}
