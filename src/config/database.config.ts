import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import { Logger } from '@nestjs/common';

const logger = new Logger('DatabaseConfig');

const hasDbUrl = Boolean(process.env.DATABASE_URL);
logger.log(`DATABASE_URL이 설정됨: ${hasDbUrl}`);

if (!hasDbUrl) {
  logger.error('DATABASE_URL 환경 변수가 설정되지 않았습니다. 애플리케이션이 제대로 작동하지 않을 수 있습니다.');
}

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Post, Comment],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
  logging: true,
};
