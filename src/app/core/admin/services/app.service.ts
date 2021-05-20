import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  getApi(url: string) {
    return this.http.get<any>(url);
  }
  putApi(url: string, data: any) {
    return this.http.put<any>(url, data, httpOptions);
  }
  postApi(url: string, data: any) {
    return this.http.post<any>(url, data, httpOptions);
  }
  deleteApi(url: string) {
    return this.http.delete<any>(url, httpOptions);
  }
  getDataFromLocalStorage(token: any) {
    return localStorage.getItem(token);
  }
  setDataToLocalStorage(token: any, data: any) {
    localStorage.setItem(token, JSON.stringify(data));
  }
  removeFromLocalStorage(token: any) {
    localStorage.removeItem(token);
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
