import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // 환경 변수 로깅
  logger.log(`DATABASE_URL 설정됨: ${Boolean(process.env.DATABASE_URL)}`);

  const port = process.env.PORT || 3000;

  await app.listen(port);
  logger.log(`Application is running on port ${port}`);
}
bootstrap();
