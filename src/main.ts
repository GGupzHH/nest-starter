import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { gerLocalhost } from './utils';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggingInterceptor } from './common/interceptors/logging.interceptors';
import { ResultInterceptor } from './common/interceptors/result.interceptors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  dotenv.config();
  const { PORT } = process.env;

  const app = await NestFactory.create(AppModule);

  // http-exception-filter
  app.useGlobalFilters(new HttpExceptionFilter());
  // http-prefix
  app.setGlobalPrefix('api');
  // 全局拦截器
  app.useGlobalInterceptors(new LoggingInterceptor(), new ResultInterceptor());
  // 跨域
  app.enableCors();

  // 全局管道
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //   }),
  // );

  // 设置swagger文档相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-starter api document')
    .setDescription('nest starter project api document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);

  const localhost = gerLocalhost();
  console.log('\n', '🚀   Nest Starter Server\n');
  console.log(`> Local: http://localhost:${PORT}`);
  console.log(`> Network: http://${localhost}:${PORT}\n`);
}

bootstrap();
