import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const validationPipe = new ValidationPipe({
    whitelist: true
  });

  app
    .use(helmet())
    .setGlobalPrefix('v1')
    .useGlobalPipes(validationPipe)
    .enableCors();

  await app.listen(3000);
}
bootstrap();
