import { CreateCommentDto } from './create-comment.dto';
export declare class UpdateCommentDto implements Partial<CreateCommentDto> {
    content?: string;
    author?: string;
}
