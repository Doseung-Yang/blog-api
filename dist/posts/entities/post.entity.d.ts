import { Comment } from '../../comments/entities/comment.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    author: string;
    comments: Comment[];
    createdAt: Date;
    updatedAt: Date;
}
