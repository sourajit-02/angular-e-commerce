import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss'],
})
export class TopnavbarComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit() {}
  logout() {
    localStorage.removeItem('admin_access_token');
    setTimeout(() => {
      this.router.navigate(['admin/login']).then(
        (response) => {
          console.log('Navigation response: ', response);
          this.toastr.success('Logout was successfull!!', 'Success:', {
            closeButton: true,
            onActivateTick: true,
          });
        },
        (error) => {
          console.log(error);
          if (error.message) {
            this.toastr.error(
              `${error.message}`,
              'Error: Logout was Unsuccessful!!',
              {
                closeButton: true,
              }
            );
          } else {
            this.toastr.error(`${error}`, 'Error: Logout was Unsuccessful!!', {
              closeButton: true,
            });
          }
        }
      );
    }, 100);
  }
}
