import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Post } from '../posts/entities/post.entity';
export declare class CommentsService {
    private commentsRepository;
    private postsRepository;
    constructor(commentsRepository: Repository<Comment>, postsRepository: Repository<Post>);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment>;
    remove(id: number): Promise<void>;
}
