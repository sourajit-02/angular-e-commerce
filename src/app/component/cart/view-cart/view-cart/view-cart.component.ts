import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ICartItem } from 'src/app/core/models/ICartItem';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

export interface View_Element {
  product_name: string;
  product_description: string;
  product_price: number;
  total: number;
  product_quantity: number;
  id?: number;
  product_id?: number;
}

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit {
  public View_Data: View_Element[] = [];
  public title: string = 'Shopping Cart';
  public shipping: number = 25;
  public tax: number = 3.8;
  public displayedColumns: string[] = [
    'product_name',
    'product_description',
    'product_price',
    'product_quantity',
    'total',
    'remove',
  ];
  public dataSource: MatTableDataSource<View_Element>;
  public cartItems: ICartItem[] = [];
  public cartTotal = 0;
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private router: Router,
    private toastr: ToastrService
  ) {}

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
    if (this.cartItems && this.cartItems.length === 0) {
      this.cartItems = [];
      this.navigateToHome();
    }
    this.calCartTotal();
    this.loadTableData(this.cartItems);
  }
  calCartTotal() {
    this.cartTotal = 0;
    if (this.cartItems && this.cartItems.length !== 0) {
      this.cartItems.forEach((item) => {
        this.cartTotal += item.product_quantity * item.product_price;
      });
    }
  }
  loadTableData(data: ICartItem[]) {
    this.View_Data = [];
    if (data) {
      data.forEach((item) => {
        let cartItem: View_Element = {
          product_name: item.product_name,
          product_description: item.product_description,
          product_price: item.product_price,
          product_quantity: item.product_quantity,
          total: item.product_price * item.product_quantity,
          id: item.id,
          product_id: item.product_id,
        };
        this.View_Data.push(cartItem);
      });
    }
    this.dataSource = new MatTableDataSource(this.View_Data);
  }
  increase(data: View_Element) {
    this.cartItems = this.cartService.getFromStorage('Cart');
    let item = _.find(this.cartItems, (element) => {
      if (element.id === data.id) {
        element.product_quantity++;
        return element;
      }
    });
    this.cartService.updateStorage(
      'Cart',
      'increment',
      this.cartItems,
      data.id
    );
    console.log('Increased Cart item in product item component!');
    this.msg.sendMsg(this.cartItems);
  }

  decrease(data: View_Element) {
    this.cartItems = this.cartService.getFromStorage('Cart');
    if (data.product_quantity > 1) {
      let item = _.find(this.cartItems, (element) => {
        if (element.product_id === data.product_id) {
          element.product_quantity--;
          return element;
        }
      });
      this.cartService.updateStorage(
        'Cart',
        'decrement',
        this.cartItems,
        data.id
      );
      console.log('Decreased Cart item in product item component!');
    } else {
      this.cartItems = this.cartService.getFromStorage('Cart');
      console.log(this.cartItems);
      if (this.cartItems.length > 1) {
        let item = _.remove(this.cartItems, (element) => {
          return element.product_id === data.product_id;
        });
        this.cartService.updateStorage(
          'Cart',
          'delete',
          this.cartItems,
          data.product_id
        );
        console.log('Deleted Cart item in cart item component!');
      } else {
        this.cartService.removeFromStorage('Cart', this.cartItems[0]);
        console.log('Cleared Cart items in cart item component!');
        this.navigateToHome();
      }
    }
    this.msg.sendMsg(this.cartItems);
  }
  deleteCartItem(data: View_Element) {
    this.cartItems = this.cartService.getFromStorage('Cart');
    // this.cartService.removeFromStorage('Cart', this.cartItems[0]);
    console.log('Deleted Cart item in cart item component!');
    // this.msg.sendMsg(this.cartItems);
  }
  navigateToHome() {
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
