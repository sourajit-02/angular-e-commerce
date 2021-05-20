import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { getOrderUrl, addOrderUrl, editOrderUrl } from '../config/api';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private app: AppService) {}
  getOrders(): Observable<any> {
    return this.app.getApi('getOrderUrl').pipe(
      map((result) => {
        let ordersArray: any[] = [];
        for (const id in result.data) {
          if (result.data[id].hasOwnProperty('id')) {
            ordersArray.push(result.data[id]);
          } else {
            return null;
          }
        }
        console.log(ordersArray);
        return ordersArray;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  postOrderData(data: any) {
    return this.app
      .postApi(addOrderUrl, data)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  putOrderData(data: any) {
    return this.app
      .putApi(editOrderUrl, data)
      .pipe(retry(3), catchError(this.app.handleError));
  }
}
