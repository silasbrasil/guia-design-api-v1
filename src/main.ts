import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const validationPipe = new ValidationPipe({
    whitelist: true
  });

  app
    .enableVersioning({ type: VersioningType.URI })
    .use(helmet())
    .useGlobalPipes(validationPipe)
    .enableCors();

  await app.listen(3000);
}
bootstrap();
