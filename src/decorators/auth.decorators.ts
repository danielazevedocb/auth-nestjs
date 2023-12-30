import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { ROLES_KEY, Role } from './roles.decorators';
import { RolesGuard } from '../infra/providers/roles-guard.provider';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(AuthGuard, RolesGuard),
  );
}
