import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { productsUrl } from '../config/api';
import { AppService } from './app.service';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private app: AppService) {}
  getProducts(): Observable<any> {
    return this.app.getApi(productsUrl).pipe(
      map((result) => {
        const productsArray: IProduct[] = [];
        for (const id in result) {
          if (result[id].hasOwnProperty('id')) {
            productsArray.push(result[id]);
            productsArray[id].product_id = result[id].id;
          } else {
            return null;
          }
        }
        return productsArray;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  getProductByUrl(viewUrl: string) {
    let productDetails: Product;
    return this.app.getApi(productsUrl + '?viewUrl=' + viewUrl).pipe(
      map((result) => {
        for (const item of result) {
          if (item && typeof item === 'object' && item.hasOwnProperty('id')) {
            productDetails = new Product(
              item.id,
              item.viewUrl,
              item.imgUrl,
              item.name,
              item.size,
              item.color,
              item.price
            );
            return productDetails;
          } else {
            return null;
          }
        }
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  getFilterOptions(key: string): object[] {
    switch (key) {
      case 'color':
        return [
          {
            name: 'red',
          },
          {
            name: 'black',
          },
          {
            name: 'gray',
          },
        ];
      case 'price':
        return [
          {
            min: 0,
            max: 20,
          },
          {
            min: 20,
            max: 40,
          },
          {
            min: 40,
            max: 60,
          },
        ];
      case 'size':
        return [
          {
            size: 'S',
          },
          {
            size: 'M',
          },
          {
            size: 'L',
          },
          {
            size: 'XL',
          },
        ];
      case 'category':
        return [
          {
            type: 'Best Seller',
            link: '/website/product/best-seller',
          },
          {
            type: 'Featured',
            link: '/website/product/featured',
          },
        ];
    }
  }
}
