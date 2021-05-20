import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/core/services/app.service';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private app: AppService,
    private router: Router,
    private cart: CartService,
    private msg: MessengerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  onLogout() {
    this.app.removeFromLocalStorage('ACCESS_TOKEN');
    this.app.removeFromLocalStorage('USER_ID');
    this.app.removeFromLocalStorage('Cart');
    this.router.navigate(['website']).then(
      (response) => {
        console.log('Navigation response: ', response);
        this.toastr.success(
          'Navigation to Home Page was successfull!!',
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
            'Error: Navigation to Home Page was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Navigation to Home Page was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
}
