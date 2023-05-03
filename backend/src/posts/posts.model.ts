import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  @ApiProperty({ example: 'Post title' })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @Column({ type: DataType.STRING })
  @ApiProperty({ example: 'image.jpg' })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({ example: 1 })
  userId: number;

  @BelongsTo(() => User)
  @ApiProperty({ example: 'User', description: 'Post author' })
  author: User;
}
