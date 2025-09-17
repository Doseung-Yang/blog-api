import { IsNotEmpty, IsString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title!: string;

  @IsNotEmpty()
  @IsString()
  content!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(15)
  @IsOptional()
  author!: string;
}
