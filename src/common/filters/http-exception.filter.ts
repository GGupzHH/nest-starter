import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    // 获取请求上下文
    const ctx = host.switchToHttp();

    // 获取请求上下文中的response对象
    const response = ctx.getResponse();

    // 获取请求上下文中的request对象
    const request = ctx.getRequest();

    // 获取异常状态码
    const status = exception.getStatus();
    console.log(exception);
    const exceptionRes: any = exception.getResponse();
    const { error, message } = exceptionRes;

    response.header();
    response.status(status).json({
      status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error,
      message,
    });
  }
}
