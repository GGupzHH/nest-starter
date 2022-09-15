import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/Bank/app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { gerLocalhost } from './utils';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const { PORT } = process.env;

  // http-exception-filter
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(PORT);

  const localhost = gerLocalhost();

  console.log('\n', '🚀   Nest Starter Server\n');
  console.log(`> Local: http://localhost:${PORT}`);
  console.log(`> Network: http://${localhost}:${PORT}\n`);
}

bootstrap();
