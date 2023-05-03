import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'Must be a number' })
  readonly userId: number;

  @ApiProperty({ example: 'reason' })
  @IsString({ message: 'Must be a string' })
  readonly banReason: string;
}
