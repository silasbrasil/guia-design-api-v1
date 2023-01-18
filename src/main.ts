import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const validationPipe = new ValidationPipe({
    whitelist: true,
    transform: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Api de Usuários')
    .setDescription('Descrição sobre a API de Usuários')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/docs', app, document);

  app
    .enableVersioning({ type: VersioningType.URI })
    .use(helmet())
    .useGlobalPipes(validationPipe)
    .enableCors();

  await app.listen(3000);
}
bootstrap();
