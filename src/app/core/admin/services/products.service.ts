import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import {
  addProductUrl,
  addVendorUrl,
  deleteProductUrl,
  editProductUrl,
  editVendorUrl,
  getLowStockUrl,
  getProductsUrl,
  getVendorUrl,
} from '../config/api';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private app: AppService) {}
  getProducts(): Observable<any> {
    return this.app.getApi(getProductsUrl).pipe(
      map((result) => {
        let productsArray: any[] = [];
        for (const id in result.data) {
          if (result.data[id].hasOwnProperty('id')) {
            productsArray.push(result.data[id]);
          } else {
            return null;
          }
        }
        console.log(productsArray);
        return productsArray;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  postProductData(data: any): Observable<any> {
    let product: any = {
      product_title: data.product_title,
      product_name: data.product_name,
      product_description: data.product_description,
      product_quantity: data.product_quantity,
      product_price: data.product_price,
      discount_price: data.discount_price,
      sku: data.sku,
      tax: data.tax,
      shipping_info_length: data.shipping_info_length,
      shipping_info_width: data.shipping_info_width,
      shipping_info_height: data.shipping_info_height,
      shipping_info_weight: data.shipping_info_weight,
      return_days: data.return_days,
      config: data.config,
      hsn_code: data.hsn_code,
      meta_title: data.meta_title,
      meta_keyword: data.meta_keyword,
      meta_description: data.meta_description,
      custom_tags: data.custom_tags,
      key_feature_1: data.key_feature_1,
      key_feature_2: data.key_feature_2,
      key_feature_3: data.key_feature_3,
      is_active: 1,
      created_by: 'admin',
    };
    if (data.is_active === 'active') {
      product.is_active = 1;
    } else {
      product.is_active = 0;
    }
    return this.app
      .postApi(addProductUrl, product)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  putProductData(data: any): Observable<any> {
    let product: any = {
      product_title: data.product_title,
      product_name: data.product_name,
      product_description: data.product_description,
      product_quantity: data.product_quantity,
      product_price: data.product_price,
      discount_price: data.discount_price,
      sku: data.sku,
      tax: data.tax,
      shipping_info_length: data.shipping_info_length,
      shipping_info_width: data.shipping_info_width,
      shipping_info_height: data.shipping_info_height,
      shipping_info_weight: data.shipping_info_weight,
      return_days: data.return_days,
      config: data.config,
      hsn_code: data.hsn_code,
      meta_title: data.meta_title,
      meta_keyword: data.meta_keyword,
      meta_description: data.meta_description,
      custom_tags: data.custom_tags,
      key_feature_1: data.key_feature_1,
      key_feature_2: data.key_feature_2,
      key_feature_3: data.key_feature_3,
      is_active: 1,
      updated_by: 'admin',
    };
    if (data.is_active === 'active') {
      product.is_active = 1;
    } else {
      product.is_active = 0;
    }
    return this.app
      .putApi(editProductUrl + `/${data.product_id}`, product)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  deleteProductData(data: any): Observable<any> {
    return this.app
      .getApi(deleteProductUrl + `/${data.product_id}`)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  getVendors(): Observable<any> {
    return this.app.getApi(getVendorUrl).pipe(
      map((result) => {
        let lowStockProductsArray: any[] = [];
        for (const id in result.Data) {
          if (result.Data[id].hasOwnProperty('id')) {
            lowStockProductsArray.push(result.Data[id]);
          } else {
            return null;
          }
        }
        console.log(lowStockProductsArray);
        return lowStockProductsArray;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  postVendorData(data: any) {
    return this.app
      .postApi(addVendorUrl, data)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  putVendorData(data: any) {
    return this.app
      .putApi(editVendorUrl + `/${data.vendor_id}`, data)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  getLowStockProducts(): Observable<any> {
    return this.app.getApi(getLowStockUrl).pipe(
      map((result) => {
        let lowStockProductsArray: any[] = [];
        console.log(result);
        for (const id in result.data) {
          if (result.data[id].hasOwnProperty('id')) {
            lowStockProductsArray.push(result.data[id]);
          } else {
            return null;
          }
        }
        console.log(lowStockProductsArray);
        return lowStockProductsArray;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
}
