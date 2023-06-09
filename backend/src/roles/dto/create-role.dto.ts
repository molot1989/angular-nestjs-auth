import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN' })
  @IsString({ message: 'Must be a string' })
  readonly value: string;

  @ApiProperty({ example: 'Administrator' })
  @IsString({ message: 'Must be a string' })
  readonly description: string;
}
