import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto implements Partial<CreatePostDto> {
  title?: string;
  content?: string;
  author?: string;
}
