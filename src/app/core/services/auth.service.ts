import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}
  authUser(): boolean {
    const token = this.userService.getToken('ACCESS_TOKEN');
    if (!token) {
      return false;
    } else {
      return true;
    }
  }
  authAdminUser(): boolean {
    const token = this.userService.getToken('admin_access_token');
    if (!token) {
      return false;
    } else {
      return true;
    }
  }
}
