import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from '../posts/entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import { User } from '../users/entities/user.entity';

const pgUrl = process.env.DATABASE_URL;
const pgHost = process.env.DB_HOST;
const pgPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined;
const pgUser = process.env.DB_USER;
const pgPass = process.env.DB_PASS;
const pgName = process.env.DB_NAME;

const commonEntities = [Post, Comment, User];

export const databaseConfig: TypeOrmModuleOptions =
  pgUrl || (pgHost && pgUser && pgName)
    ? {
        type: 'postgres',
        ...(pgUrl
          ? { url: pgUrl }
          : {
              host: pgHost!,
              port: pgPort || 5432,
              username: pgUser!,
              password: pgPass,
              database: pgName!,
            }),
        entities: commonEntities,

        synchronize: process.env.DB_SYNC === 'true',
        ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
      }
    : {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'blog',
        entities: commonEntities,
        synchronize: true,
      };
