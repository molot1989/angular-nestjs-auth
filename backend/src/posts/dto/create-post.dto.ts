import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Post title' })
  @IsString({ message: 'Must be a string' })
  readonly title: string;

  @ApiProperty({ example: 'Post content' })
  @IsString({ message: 'Must be a string' })
  readonly content: string;

  @ApiProperty({ example: 1 })
  @IsString({ message: 'Must be a string' })
  readonly userId: number;
}
