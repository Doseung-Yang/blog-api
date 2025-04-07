import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  content!: string;

  @IsString()
  author!: string;

  @IsNotEmpty()
  @IsNumber()
  postId!: number;
}
