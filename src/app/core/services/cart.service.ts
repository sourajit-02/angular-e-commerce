import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import {
  addCartUrl,
  deleteCartUrl,
  editCartUrl,
  getCartUrl,
} from '../config/api';
import { ICartItem } from '../models/ICartItem';
import { AppService } from './app.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private app: AppService, private toastr: ToastrService) {}
  public token: String;
  public cartItems: ICartItem[] = [];
  getFromStorage(lkey: string): any[] {
    const user_id = parseInt(this.app.getDataFromLocalStorage('USER_ID'));
    if (localStorage[lkey]) {
      return JSON.parse(this.app.getDataFromLocalStorage(lkey));
    } else {
      if (user_id) {
        this.getItems(lkey);
      }
      if (this.cartItems.length !== 0) {
        return JSON.parse(this.app.getDataFromLocalStorage(lkey));
      } else {
        return [];
      }
    }
  }
  addToStorage(key: string, data: ICartItem[], item: ICartItem): void {
    this.app.setDataToLocalStorage(key, data);
    this.addItem(item, key);
  }
  updateStorage(
    key: string,
    method: string,
    data: ICartItem[],
    id?: number
  ): void {
    this.cartItems = this.getFromStorage(key);
    this.app.setDataToLocalStorage(key, data);
    if (method === 'increment' || method === 'decrement') {
      let item = _.find(data, (element) => {
        if (element.id === id) {
          return true;
        }
      });
      this.editItem(item, key);
    } else if (method === 'delete') {
      let item = _.find(this.cartItems, (element) => {
        if (element.product_id === id) {
          return true;
        }
      });
      console.log(item);
      this.deleteItem(item.id, key);
    }
  }
  removeFromStorage(key: string, cartItem: ICartItem): void {
    console.log(cartItem);
    this.app.removeFromLocalStorage(key);
    if (cartItem.hasOwnProperty('id')) {
      this.deleteItem(cartItem.id, key);
    } else {
      this.getCartItems().subscribe(
        (items: ICartItem[] | []) => {
          if (items.length !== 0) {
            this.cartItems = items;
            let item = _.find(this.cartItems, (element) => {
              if (element.product_id === cartItem.product_id) {
                return true;
              }
            });
            this.deleteItem(item.id, key);
          } else {
            this.cartItems = [];
          }
        },
        (error) => {
          console.log(error);
          if (error.message) {
            this.toastr.error(
              `${error.message}`,
              'Error: Cart items could not be loaded successfully!!',
              {
                closeButton: true,
              }
            );
          } else {
            this.toastr.error(
              `${error}`,
              'Error: Cart items could not be loaded successfully!!',
              {
                closeButton: true,
              }
            );
          }
        }
      );
    }
  }
  getCartItems(): Observable<any> {
    const user_id = parseInt(this.app.getDataFromLocalStorage('USER_ID'));
    return this.app.getApi(getCartUrl + '/' + user_id).pipe(
      map((result: any) => {
        if (result.data) {
          return result.data;
        } else {
          return [];
        }
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  getItems(key: string) {
    this.getCartItems().subscribe(
      (items: ICartItem[] | []) => {
        if (items.length !== 0) {
          this.cartItems = items;
          this.app.setDataToLocalStorage(key, this.cartItems);
        } else {
          this.cartItems = [];
        }
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Cart items could not be loaded successfully!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Cart items could not be loaded successfully!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  addProductToCart(product: ICartItem): Observable<any> {
    return this.app.postApi(addCartUrl, product).pipe(
      map((result: any) => {
        console.log(result);
        return result.data;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  addItem(item: ICartItem, key: string) {
    this.addProductToCart(item).subscribe(
      (result) => {
        this.getItems(key);
        this.toastr.success(
          'Adding Product to Cart was Successful!!',
          'Success:',
          {
            closeButton: true,
          }
        );
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Adding Product to Cart was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Adding Product to Cart was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  editCartItem(id: number, data: ICartItem) {
    return this.app.putApi(editCartUrl + '/' + id, data).pipe(
      map((result: any) => {
        console.log(result);
        return result.data;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  editItem(item: ICartItem, key: string) {
    this.editCartItem(item.id, item).subscribe(
      (result) => {
        this.toastr.success(
          'Updating Product to Cart was Successful!!',
          'Success:',
          {
            closeButton: true,
          }
        );
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Adding Product to Cart was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Adding Product to Cart was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  deleteProductFromCart(id: number): Observable<any> {
    return this.app.deleteApi(deleteCartUrl + '/' + id).pipe(
      map((result: any) => {
        console.log(result);
        return result;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  deleteItem(id: number, key: string) {
    this.deleteProductFromCart(id).subscribe(
      (result) => {
        this.toastr.success(
          'Removing Product from Cart was Successful!!!!',
          'Success:',
          {
            closeButton: true,
          }
        );
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Removing Product from Cart was Unsucessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Removing Product from Cart was Unsucessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
}
