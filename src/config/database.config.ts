import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Post, Comment],
  synchronize: true, // 개발 초기 단계에서는 true로 설정 가능, 프로덕션에서는 false 권장
  ssl: {
    rejectUnauthorized: false, // Render PostgreSQL에 필요
  },
  logging: false,
};
