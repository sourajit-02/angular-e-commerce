import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import {
  getCategoryUrl,
  addCategoryUrl,
  editCategoryUrl,
  getVariantMasterUrl,
  getVariantDataUrl,
  addVariantMasterUrl,
  editVariantMasterUrl,
  deleteVariantMasterUrl,
  getVariantActiveUrl,
  addVariantDataUrl,
  editVariantDataUrl,
  deleteVariantDataUrl,
  getCountryListUrl,
  getStateListUrl,
  getCityListUrl,
} from '../config/api';
import { Category } from '../models/Category';
import { VariantData } from '../models/VariantData';
import { VariantMaster } from '../models/VariantMaster';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private app: AppService) {}
  getCategories(): Observable<any> {
    return this.app.getApi(getCategoryUrl).pipe(
      map((result) => {
        let categoriesArray: Category[] = [];
        if(result.data.length > 0) {
          categoriesArray = result.data;
        }
        return categoriesArray;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  postCategoryData(data: any) {
    return this.app
      .postApi(addCategoryUrl, data)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  putCategoryData(data: any) {
    return this.app
      .putApi(editCategoryUrl + `/${data.id}`, data)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  getVariantMasters(): Observable<any> {
    return this.app.getApi(getVariantMasterUrl).pipe(
      map((result) => {
        let variantMasters: VariantMaster[] = [];
        console.log(result);
        if (result.data && result.data.length !== 0) {
          for (const id in result.data) {
            let variant: VariantMaster = {
              variant_name: result.data[id].variant_name,
              variant_alias: result.data[id].variant_alias,
              is_active: result.data[id].is_active,
              id: result.data[id].id,
            };
            variantMasters.push(variant);
          }
        } else {
          variantMasters = [];
        }
        console.log(variantMasters);
        return variantMasters;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  postVariantMaster(data: any) {
    let variantMaster: any = {
      variant_name: data.variant_name,
      variant_alias: data.variant_alias,
      is_active: 1,
      created_by: 'admin',
    };
    if (data.is_active === 'active') {
      variantMaster.is_active = 1;
    } else {
      variantMaster.is_active = 0;
    }
    return this.app
      .postApi(addVariantMasterUrl, variantMaster)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  putVariantMaster(data: any) {
    let variantMaster: any = {
      variant_name: data.variant_name,
      variant_alias: data.variant_alias,
      is_active: 1,
      updated_by: 'admin',
    };
    if (data.is_active === true) {
      variantMaster.is_active = 1;
    } else if (data.is_active === false) {
      variantMaster.is_active = 0;
    }
    return this.app
      .putApi(editVariantMasterUrl + `/${data.id}`, variantMaster)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  deleteVariantMaster(data: any): Observable<any> {
    return this.app
      .getApi(deleteVariantMasterUrl + `/${data.id}`)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  getVariantData(): Observable<any> {
    return this.app.getApi(getVariantDataUrl).pipe(
      map((result) => {
        let variantData: VariantData[] = [];
        console.log(result);
        if (result.data && result.data.length !== 0) {
          for (const id in result.data) {
            let variant: VariantData = {
              variant_id: result.data[id].variant_id,
              variant_data: result.data[id].variant_data,
              variant_code: result.data[id].variant_code,
              id: result.data[id].id,
            };
            variantData.push(variant);
          }
        } else {
          variantData = [];
        }
        console.log(variantData);
        return variantData;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  postVariantData(data: any) {
    let variantData: any = {
      variant_id: data.variant_id,
      variant_code: data.variant_code,
      variant_data: data.variant_data,
      created_by: 'admin',
    };
    return this.app
      .postApi(addVariantDataUrl, variantData)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  putVariantData(data: any) {
    let variantData: any = {
      variant_id: data.variant_id,
      variant_code: data.variant_code,
      variant_data: data.variant_data,
      updated_by: 'admin',
    };
    console.log(variantData);
    return this.app
      .putApi(editVariantDataUrl + `/${data.id}`, variantData)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  deleteVariantData(data: any): Observable<any> {
    return this.app
      .getApi(deleteVariantDataUrl + `/${data.id}`)
      .pipe(retry(3), catchError(this.app.handleError));
  }
  getVariantActiveData(): Observable<any> {
    return this.app.getApi(getVariantActiveUrl).pipe(
      map((result) => {
        let variant_active_data: any[] = [];
        if (result.data && result.data.length !== 0) {
          variant_active_data = result.data.map(function (value) {
            return {
              name: value.variant_name + '-' + value.variant_alias,
              value: value.id,
            };
          });
        } else {
          variant_active_data = [];
        }
        return variant_active_data;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  //  get country list api
  getCountryList(): Observable<any> {
    return this.app.getApi(getCountryListUrl).pipe(
      map((result) => {
        let contryList: any[] = [];
        contryList = result.data.map((value) => {
          return value;
        });
        console.log(contryList);
        return contryList;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  //  get state list api call
  getStateList(): Observable<any> {
    return this.app.getApi(getStateListUrl).pipe(
      map((result) => {
        let stateList: any[] = [];
        stateList = result.data.map((value) => {
          return value;
        });
        return stateList;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  //  get city list api call
  getCityList(): Observable<any> {
    return this.app.getApi(getCityListUrl).pipe(
      map((result) => {
        let cityList: any[] = [];
        cityList = result.data.map((value) => {
          return value;
        });
        return cityList;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
}
