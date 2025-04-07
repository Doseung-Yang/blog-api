import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Post, Comment],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
  logging: false,
};
