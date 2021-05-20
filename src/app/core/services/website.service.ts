import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategoeyUrl } from '../config/api';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private app: AppService) {}
  getCategory(): Observable<any> {
    return this.app.getApi(CategoeyUrl).pipe(
      map((result) => {
       return result;
        }
      ),
      retry(3),
      catchError(this.app.handleError)
    );
  }
}
