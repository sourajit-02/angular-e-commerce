import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../admin/services/app.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private app: AppService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('admin')) {
      const token: object = JSON.parse(
        this.app.getDataFromLocalStorage('admin_access_token')
      );
      return this.setHeader(req, next, token);
    } else {
      const token: object = JSON.parse(
        this.app.getDataFromLocalStorage('ACCESS_TOKEN')
      );
      return this.setHeader(req, next, token);
    }
  }
  setHeader(
    req: HttpRequest<any>,
    next: HttpHandler,
    token: object
  ): Observable<HttpEvent<any>> {
    if (!token) {
      return next.handle(req);
    }
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next.handle(authReq);
  }
}
