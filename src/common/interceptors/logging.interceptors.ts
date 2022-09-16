import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: any, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            context.args[0].method,
            context.args[0].url,
            `Time consuming... ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
