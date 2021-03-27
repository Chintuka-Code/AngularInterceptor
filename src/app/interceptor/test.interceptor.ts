import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class TestInterceptor implements HttpInterceptor {
  constructor() {}

  handleError(err: HttpErrorResponse) {
    err['customMessage'] = 'some wrong with your request';
    return throwError(err);
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = `Bearer ${localStorage.getItem('token')}`;
    request = request.clone({
      setHeaders: {
        Authorization: token,
      },
    });
    return next.handle(request).pipe(retry(2), catchError(this.handleError));
  }
}
