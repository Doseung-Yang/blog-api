import { Injectable, NotFoundException, Logger, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  private logger = new Logger('PostsService');

  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    this.logger.log(`Attempting to create post: ${JSON.stringify(createPostDto)}`);
    try {
      const post = this.postsRepository.create(createPostDto);
      this.logger.log('Post entity created, saving to database...');
      const result = await this.postsRepository.save(post);
      this.logger.log(`Post saved successfully with ID: ${result.id}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to create post: ${error.message}`, error.stack);
      throw new InternalServerErrorException(`Could not create post: ${error.message}`);
    }
  }

  // 다른 메서드는 변경하지 않음
}
