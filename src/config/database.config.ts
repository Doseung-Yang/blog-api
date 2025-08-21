// src/config/database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import { User } from '../users/entities/user.entity';

const entities = [Post, Comment, User];

function normalizeUrl(u?: string): string | undefined {
  return u ? u.replace(/^postgresql:\/\//, 'postgres://') : undefined;
}

export function typeOrmConfig(config: ConfigService): TypeOrmModuleOptions {
  const raw = config.get<string>('DATABASE_URL');
  const url = normalizeUrl(raw);
  if (!url) {
    throw new Error('DATABASE_URL is required');
  }
  const sync = config.get<string>('DB_SYNC') === 'true';
  const useSsl = config.get<string>('DB_SSL') === 'true' || /[?&]sslmode=require\b/.test(url);

  return {
    type: 'postgres',
    url,
    entities,
    synchronize: sync,
    ssl: useSsl ? { rejectUnauthorized: false } : undefined,
  };
}
