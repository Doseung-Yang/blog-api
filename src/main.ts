import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as net from 'net';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

function isPortFree(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const srv = net.createServer();
    srv.once('error', () => resolve(false));
    srv.once('listening', () => srv.close(() => resolve(true)));
    srv.listen(port, '0.0.0.0');
  });
}

async function pickPort(base = 3000, maxAttempts = 20): Promise<number> {
  for (let i = 0; i < maxAttempts; i++) {
    const port = base + i;
    if (await isPortFree(port)) return port;
  }
  throw new Error('No free port in range');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('Posts & Comments API')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const isProd = process.env.NODE_ENV === 'production';
  const requested = process.env.PORT ? Number(process.env.PORT) : 3000;
  const port = isProd ? requested : (await isPortFree(requested)) ? requested : await pickPort(requested + 1);

  await app.listen(port, '0.0.0.0');
  console.log(`Server listening on ${port}`);
}
bootstrap();
