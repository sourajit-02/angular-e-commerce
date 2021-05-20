import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillingData } from 'src/app/core/models/BillingData';
import { ICartItem } from 'src/app/core/models/ICartItem';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger.service';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.scss'],
})
export class CheckoutOrderComponent implements OnInit {
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  public cartItems: ICartItem[] = [];
  public cartTotal = 0;
  public billingData: BillingData;

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
    this.router.navigate(['website']).then(
      (response) => {
        console.log('Navigation response: ', response);
        this.toastr.success('Your Cart is empty!!', 'Success:', {
          closeButton: true,
          onActivateTick: true,
        });
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
