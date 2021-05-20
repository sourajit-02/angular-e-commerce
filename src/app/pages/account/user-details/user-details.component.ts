import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onLogout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.router.navigate(['/account/login']);
      console.log('Logout Successfull');
    } else {
      console.log('Please Login first');
    }
  }
}
