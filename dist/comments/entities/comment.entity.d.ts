import { Post } from '../../posts/entities/post.entity';
export declare class Comment {
    id: number;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    post: Post;
}
