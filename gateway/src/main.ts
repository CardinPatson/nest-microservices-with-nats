import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //gateway the entry point for the microservice
  await app.listen(3001);
}
bootstrap();
