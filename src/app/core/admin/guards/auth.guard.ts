import { Injectable } from '@angular/core';
import {  CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authservice: AuthService
  ) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authservice.authAdminUser()) {
        this.router.navigate(['admin/dashbaord']);
        return true;
    } else {
      this.router.navigate(['admin/login']);
      return true;
    }
  }
}
