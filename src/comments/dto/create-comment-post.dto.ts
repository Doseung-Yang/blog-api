import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCommentForPostDto {
  @IsNotEmpty()
  @IsString()
  content!: string;

  @IsOptional()
  @IsString()
  author?: string;
}
