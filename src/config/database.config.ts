import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://blog_db_a912_user:Ctt1EevI7JT4iwCRn8OytHXECa5RCVle@dpg-cvpj1m3uibrs73804t10-a/blog_db_a912', // 직접 입력
  entities: [Post, Comment],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
