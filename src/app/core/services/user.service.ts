import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { addUsersUrl, editUserUrl, getUserUrl, loginUrl } from '../config/api';
import { IFormsModel } from '../models/IFormsModel';
import { User } from '../models/User';
import { UserDetails } from '../models/UserDetails';
import { AppService } from './app.service';
import { CartService } from './cart.service';
import { MessengerService } from './messenger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private app: AppService,
    private location: Location,
    private cart: CartService,
    private msg: MessengerService,
    private toastr: ToastrService
  ) {}
  registerUser(user: User): Observable<any> {
    return this.app.postApi(addUsersUrl, user).pipe(
      map((response) => {
        console.log("response",response);
        return response;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  loginUser(user: any) {
    this.postLogin(user).subscribe(
      (result) => {
        console.log(result);
        this.app.setDataToLocalStorage('ACCESS_TOKEN', result.acess_token);
        this.app.setDataToLocalStorage('USER_ID', result.user.id);
        this.cart.getFromStorage('Cart');
        this.toastr.success('Login was Successful!!', 'Success:', {
          closeButton: true,
          onActivateTick: true,
        });
        console.log('Login Successful !!!');
        this.location.back();
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(`${error.message}`, 'Login not successful!!', {
            closeButton: true,
          });
        } else {
          this.toastr.error(`${error}`, 'Login not successful!!', {
            closeButton: true,
          });
        }
      }
    );
  }
  postLogin(user: any) {
    return this.app.postApi(loginUrl, user).pipe(
      map((response) => {
        return response;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  getToken(token: string): string {
    return this.app.getDataFromLocalStorage(token);
  }
  getUserDetails(): Observable<any> {
    const user_id = parseInt(this.app.getDataFromLocalStorage('USER_ID'));
    return this.app.getApi(getUserUrl + '/' + user_id).pipe(
      map((result: any) => {
        let userDetail = {
          user_first_name: result.user_first_name,
          user_last_name: result.user_last_name,
          user_email: result.user_email,
          user_phone: result.user_phone,
          user_address: result.user_address,
          city_code: result.city_code,
          country_code: result.country_code,
          user_pin_code: result.user_pin_code,
          id: result.id,
        };
        return userDetail;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  editUserDetails(user: UserDetails) {
    const user_id = parseInt(this.app.getDataFromLocalStorage('USER_ID'));
    user.id = user_id;
    console.log(user);
    return this.app.putApi(editUserUrl + '/' + user_id, user).pipe(
      map((response) => {
        return response;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  getEditUserForm(): IFormsModel[] {
    return [
      {
        fieldType: 'input',
        label: 'First Name',
        type: 'text',
        value: 'value',
        placeholder: 'First Name',
        controller: 'user_first_name',
        validators: [Validators.required, Validators.maxLength(255)],
      },
      {
        fieldType: 'input',
        label: 'Last Name',
        type: 'text',
        value: 'value',
        placeholder: 'Last Name',
        controller: 'user_last_name',
        validators: [Validators.required, Validators.maxLength(255)],
      },
      {
        fieldType: 'input',
        label: 'Phone/Mobile',
        type: 'number',
        value: 8888888888,
        min: 0,
        placeholder: 'Phone/Mobile',
        controller: 'user_phone',
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      },
      {
        fieldType: 'input',
        label: 'Email',
        type: 'email',
        value: 'value@test',
        placeholder: 'Email',
        controller: 'user_email',
        validators: [Validators.required, Validators.email],
      },
      {
        fieldType: 'textarea',
        label: 'User Address Line 1',
        type: 'text',
        value: 'value',
        placeholder: 'User Address',
        controller: 'user_address',
        validators: [Validators.required],
      },
      {
        fieldType: 'select',
        label: 'Country',
        values: [{ name: 'Maharashtra', value: 1 }],
        placeholder: 'Country',
        controller: 'country_code',
        validators: [Validators.required],
      },
      {
        fieldType: 'select',
        label: 'City',
        values: [{ name: 'Mumbai', value: 1 }],
        placeholder: 'City',
        controller: 'city_code',
        validators: [Validators.required],
      },
      {
        fieldType: 'input',
        label: 'Pin Code',
        type: 'number',
        value: 50,
        min: 0,
        placeholder: 'Pin Code',
        controller: 'user_pin_code',
        validators: [Validators.required],
      },
    ];
  }
}
