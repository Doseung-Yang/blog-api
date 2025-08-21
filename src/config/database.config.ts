import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import { User } from '../users/entities/user.entity';

const entities = [Post, Comment, User];

function normalizeUrl(u?: string): string | undefined {
  return u ? u.replace(/^postgresql:\/\//, 'postgres://') : undefined;
}

export const databaseConfig: TypeOrmModuleOptions = (() => {
  const url = normalizeUrl(process.env.DATABASE_URL);
  const sync = process.env.DB_SYNC === 'true';

  if (!url) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('DATABASE_URL is required in production.');
    }
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'blog',
      entities,
      synchronize: true,
    };
  }

  const useSsl = process.env.DB_SSL === 'true' || /[?&]sslmode=require\b/.test(url);

  return {
    type: 'postgres',
    url,
    entities,
    synchronize: sync,
    ssl: useSsl ? { rejectUnauthorized: false } : undefined,
  };
})();
