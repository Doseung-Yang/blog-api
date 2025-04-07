import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto implements Partial<CreateCommentDto> {
  content?: string;
  author?: string;
}
