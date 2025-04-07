import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 활성화
  app.enableCors();

  // Validation Pipe 추가
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    })
  );

  // Render에서 PORT 환경 변수 사용
  const port = process.env.PORT || 3000;

  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
bootstrap();
