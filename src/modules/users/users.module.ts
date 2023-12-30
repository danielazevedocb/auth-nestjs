import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserUseCase } from './use-case/create-user.usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.schema';
import { UpdateAddRoleUserUseCase } from './use-case/update-add-role-user.usecase';
import { ListUserUseCase } from './use-case/list-user.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [CreateUserUseCase, UpdateAddRoleUserUseCase, ListUserUseCase],
})
export class UsersModule {}
