import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../users/users.model';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.rolesService.createRole(dto);
  }

  @ApiOperation({ summary: 'Get role' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  getByValue(@Param('value') value: string): Promise<Role> {
    return this.rolesService.getRoleByValue(value);
  }
}
