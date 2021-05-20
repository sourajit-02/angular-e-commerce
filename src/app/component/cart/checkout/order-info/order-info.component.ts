import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICartItem } from 'src/app/core/models/ICartItem';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
})
export class OrderInfoComponent implements OnInit {
  public cartItems: ICartItem[] = [];
  public cartTotal = 0;
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loadCartItems();
  }

  ngOnInit() {
    this.loadCartItems();
    this.handleSubscription();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe(
      (result) => {
        this.loadCartItems();
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Failed to connect with your cart!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Failed to connect with your cart!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }

  loadCartItems() {
    this.cartItems = this.cartService.getFromStorage('Cart');
    if (this.cartItems.length === 0) {
      this.cartItems = [];
      this.navigateToHome();
    }
    this.calCartTotal();
  }
  calCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.product_quantity * item.product_price;
    });
  }
  navigateToHome() {
    setTimeout(() => {
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
    }, 1000);
  }
}
