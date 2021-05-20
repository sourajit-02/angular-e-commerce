import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICartItem } from 'src/app/core/models/ICartItem';
import { IProduct } from 'src/app/core/models/IProduct';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger.service';
import { UserService } from 'src/app/core/services/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: IProduct;
  public productExists = false;
  @Input() authUser: boolean = false;
  public cartItems: ICartItem[] = [];
  constructor(
    private msg: MessengerService,
    private cart: CartService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) {
    if (this.authUser === true) {
      this.loadCartItems();
    }
  }
  ngOnInit(): void {
    if (this.authUser === true) {
      this.loadCartItems();
      this.handleSubscription();
    }
  }
  handleAddToCart() {
    if (this.authUser === true) {
      const user_id = parseInt(this.userService.getToken('USER_ID'));
      let cartItem: ICartItem = {
        user_id: user_id,
        product_id: this.productItem.product_id,
        product_name: this.productItem.product_name,
        product_description: this.productItem.product_description,
        product_quantity: 1,
        product_price: this.productItem.product_price,
        created_by: this.productItem.created_by,
        updated_by: this.productItem.updated_by,
      };
      this.updateCart(cartItem);
    } else {
      this.navigateToLogin();
    }
  }
  updateCart(cartItem: ICartItem) {
    this.cartItems = this.cart.getFromStorage('Cart');
    if (this.cartItems.length !== 0) {
      let item = _.find(this.cartItems, (element) => {
        if (element.product_id === cartItem.product_id) {
          return element;
        }
      });
      console.log(item);
      if (item) {
        let elem = _.find(this.cartItems, (element) => {
          if (element.product_id === cartItem.product_id) {
            element.product_quantity++;
            return element;
          }
        });
        this.cart.updateStorage(
          'Cart',
          'increment',
          this.cartItems,
          elem['id']
        );
        console.log('Increased Cart item in product item component!');
      } else {
        this.addToCart(cartItem);
        console.log('Added new Cart item in product item component!');
      }
    } else {
      this.cartItems = [];
      this.addToCart(cartItem);
      console.log('Added new Cart item in product item component!');
    }
    this.msg.sendMsg(this.cartItems);
  }
  addToCart(cartItem: ICartItem) {
    this.cartItems = this.cart.getFromStorage('Cart');
    this.cartItems.push(cartItem);
    this.cart.addToStorage('Cart', this.cartItems, cartItem);
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
  navigateToLogin() {
    setTimeout(() => {
      this.router.navigate(['website/account/login']).then(
        (response) => {
          console.log('Navigation response: ', response);
          this.toastr.success(
            'Navigation to Login Page was successfull!!',
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
              'Error: Navigation to Login Page was Unsuccessful!!',
              {
                closeButton: true,
              }
            );
          } else {
            this.toastr.error(
              `${error}`,
              'Error: Navigation to Login Page was Unsuccessful!!',
              {
                closeButton: true,
              }
            );
          }
        }
      );
    }, 100);
  }
  routeToProductDetails(id: number) {
    this.router.navigate(['website/product', id]).then(
      (response) => {
        console.log('Navigation response: ', response);
        this.toastr.success(
          'Navigation to Product Details Page was successfull!!',
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
            'Error: Navigation to Product Details Page was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Navigation to Product Details Page was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
}
