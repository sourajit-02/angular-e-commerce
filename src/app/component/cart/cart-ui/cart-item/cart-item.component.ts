import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICartItem } from 'src/app/core/models/ICartItem';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: ICartItem;
  public cartItems: ICartItem[] = [];
  public productExists = false;
  constructor(
    private msg: MessengerService,
    private cart: CartService,
    private auth: AuthService,
    private toastr: ToastrService
  ) {
    if (this.auth.authUser()) {
      this.loadCartItems();
    }
  }

  ngOnInit() {
    if (this.auth.authUser()) {
      this.loadCartItems();
      this.handleSubscription();
    }
  }
  deleteCartItem(data: ICartItem) {
    this.cartItems = this.cart.getFromStorage('Cart');
    if (this.cartItem.product_quantity > 1) {
      let item = _.find(this.cartItems, (element) => {
        if (element.product_id === this.cartItem.product_id) {
          element.product_quantity--;
          return element;
        }
      });
      this.cart.updateStorage('Cart', 'decrement', this.cartItems, data.id);
      console.log('Decreased Cart item in product item component!');
    } else {
      this.cartItems = this.cart.getFromStorage('Cart');
      if (this.cartItems.length > 1) {
        let item = _.remove(this.cartItems, (element) => {
          return element.product_id === data.product_id;
        });
        this.cart.updateStorage(
          'Cart',
          'delete',
          this.cartItems,
          data.product_id
        );
        console.log('Deleted Cart item in cart item component!');
      } else {
        this.cart.removeFromStorage('Cart', this.cartItems[0]);
        console.log('Cleared Cart items in cart item component!');
      }
    }
    this.msg.sendMsg(this.cartItems);
  }
  handleSubscription() {
    this.msg.getMsg().subscribe(
      (result) => {
        this.loadCartItems();
        console.log('Cart items loaded in product item component!');
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
    this.cartItems = this.cart.getFromStorage('Cart');
  }
}
