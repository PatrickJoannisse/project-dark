import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // todo: make this a lot more stringent
  await app.listen(3000);
}
bootstrap();
