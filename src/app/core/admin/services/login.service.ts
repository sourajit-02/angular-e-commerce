import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, retry, catchError } from 'rxjs/operators';
import { adminLoginUrl } from '../config/api';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private app: AppService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  loginUser(user: any) {
    this.postLogin(user).subscribe(
      (result) => {
        console.log(result);
        this.app.setDataToLocalStorage(
          'admin_access_token',
          result.acess_token
        );
        this.toastr.success('Login was Successful!!', 'Success:', {
          closeButton: true,
          onActivateTick: true,
        });
        console.log('Login Successful !!!');
        setTimeout(() => {
          this.router.navigate(['/admin/dashboard']).then(
            (response) => {
              console.log('Navigation response: ', response);
              this.toastr.success(
                'Navigation to Admin Dashboard Page was successfull!!',
                'Success:',
                {
                  closeButton: true,
                  onActivateTick: true,
                }
              );
            },
            (error) => {
              console.log(error);
              if (error.message) {
                this.toastr.error(
                  `${error.message}`,
                  'Error: Navigation to Admin Dashboard Page was Unsuccessful!!',
                  {
                    closeButton: true,
                  }
                );
              } else {
                this.toastr.error(
                  `${error}`,
                  'Error: Navigation to Admin Dashboard Page was Unsuccessful!!',
                  {
                    closeButton: true,
                  }
                );
              }
            }
          );
        }, 100);
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
    return this.app.postApi(adminLoginUrl, user).pipe(
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
  removeToken(token:string){
    this.app.removeFromLocalStorage(token)
  }
}
