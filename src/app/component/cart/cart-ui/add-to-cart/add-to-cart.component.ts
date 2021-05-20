import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { shareReplay, catchError, map } from 'rxjs/operators';
import { ICartItem } from 'src/app/core/models/ICartItem';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  public isWeb$: Observable<boolean> = this.breakpointObserver
    .observe(['(min-width: 992px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
      catchError(this.app.handleError)
    );
  public isTab$: Observable<boolean> = this.breakpointObserver
    .observe(['(min-width: 768px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
      catchError(this.app.handleError)
    );
  public headerIcon2 = '../../../assets/icon-header-02.png';
  public cartItems: ICartItem[] = [];
  public cartItemsNumber = 0;
  public cartTotal = 0;
  public shipping = 20;
  public tax = 15.2;
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private auth: AuthService,
    private breakpointObserver: BreakpointObserver,
    private app: AppService,
    private router: Router,
    private toastr: ToastrService
  ) {
    if (this.auth.authUser()) {
      this.loadCartItems();
    }
  }
  @ViewChild('op') panel: any;
  ngOnInit() {
    if (this.auth.authUser()) {
      this.loadCartItems();
      this.handleSubscription();
    }
    this.closeCartOnNavigation();
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
    this.calCartTotal();
  }
  calCartTotal() {
    this.cartTotal = 0;
    this.cartItemsNumber = 0;
    if (this.cartItems) {
      if (this.cartItems.length > 0) {
        this.cartItems.forEach((item) => {
          this.cartItemsNumber += item.product_quantity;
          this.cartTotal += item.product_quantity * item.product_price;
        });
      }
    }
  }
  closeCartOnNavigation() {
    this.router.events.subscribe((event: object) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.panel.hide();
        // console.log(event);
      }
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        // console.log(event);
      }
      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });
  }
}
