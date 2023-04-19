import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'roman@brovchenko.dev' })
  readonly email: string;

  @ApiProperty({ example: '123456' })
  readonly password: string;
}
