import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ICartItem } from 'src/app/core/models/ICartItem';
import { IProduct } from 'src/app/core/models/IProduct';
import { NameValue } from 'src/app/core/models/NameValue';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger.service';

const ELEMENT_DATA: NameValue[] = [
  { name: 'SKU', value: '140-10440-B' },
  { name: 'Brand', value: 'Brandix' },
  { name: 'Country', value: 'Japan' },
  { name: 'Part Number', value: 'BDX-750Z370-S' },
];

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  @Input() productDetails: IProduct;
  public colorsForm: FormGroup;
  public colorToggleControl = new FormControl('auto');
  public displayedColumns: string[] = ['Name', 'Value'];
  public dataSource = ELEMENT_DATA;
  public cartItem: ICartItem;
  public cartItems: ICartItem[] = [];
  constructor(
    private fb: FormBuilder,
    private msg: MessengerService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {
    this.colorsForm = this.fb.group({
      colorToggle: this.colorToggleControl,
    });
  }
  ngOnInit(): void {
    // this.loadCartItem(this.productDetails.product_id);
    // this.getCartItemById(this.productDetails.productId);
  }
  handleAddToCart() {
    //   this.cartService.addProductToCart(this.productDetails).subscribe(
    //     (result) => {
    //       // this.getCartItemById(this.productDetails.productId);
    //       this.msg.sendMsg(this.productDetails);
    //       this.toastr.success(
    //         'Adding Product to Cart was Successful!!',
    //         'Success:',
    //         {
    //           closeButton: true,
    //         }
    //       );
    //     },
    //     (error) => {
    //       console.log(error);
    //       if (error.message) {
    //         this.toastr.error(
    //           `${error.message}`,
    //           'Error: Adding Product to Cart was Unsuccessful!!',
    //           {
    //             closeButton: true,
    //           }
    //         );
    //       } else {
    //         this.toastr.error(
    //           `${error}`,
    //           'Error: Adding Product to Cart was Unsuccessful!!',
    //           {
    //             closeButton: true,
    //           }
    //         );
    //       }
    //     }
    //   );
  }
  increase() {
    // this.handleAddToCart();
  }
  decrease(product: IProduct) {
    this.cartService.getCartItems().subscribe(
      (items) => {
        this.cartItems = items;
        if (items) {
          for (const index in this.cartItems) {
            // if (
            //   this.cartItems[index].productId === product.productId &&
            //   this.cartItems[index].productQty > 0
            // ) {
            //   this.cartService
            //     .deleteProductFromCart(this.cartItems[index])
            //     .subscribe(
            //       () => {
            //         this.cartItem.productQty--;
            //         this.msg.sendMsg(this.cartItems[index]);
            //         this.toastr.success(
            //           'Removing Product from Cart was Successful!!!!',
            //           'Success:',
            //           {
            //             closeButton: true,
            //           }
            //         );
            //       },
            //       (error) => {
            //         console.log(error);
            //         if (error.message) {
            //           this.toastr.error(
            //             `${error.message}`,
            //             'Error: Removing Product from Cart was Unsucessful!!',
            //             {
            //               closeButton: true,
            //             }
            //           );
            //         } else {
            //           this.toastr.error(
            //             `${error}`,
            //             'Error: Removing Product from Cart was Unsucessful!!',
            //             {
            //               closeButton: true,
            //             }
            //           );
            //         }
            //       }
            //     );
            // }
          }
        } else {
          this.toastr.warning(
            'Cant remove Product from an empty Cart!!',
            'Warning:',
            {
              closeButton: true,
            }
          );
        }
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Cart items could not be loaded successfully!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Cart items could not be loaded successfully!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }

  getCartItemById(productId: number) {
    this.msg.getMsg().subscribe(
      (result) => {
        this.loadCartItem(productId);
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
  loadCartItem(id: number) {
    this.cartService.getCartItems().subscribe(
      (items) => {
        this.cartItems = items;
        if (items) {
          for (const item of this.cartItems) {
            if (item.product_id === id) {
              this.cartItem = item;
            }
          }
        } else {
          this.cartItem = null;
        }
      },
      (error) => {
        console.error(error);
        this.toastr.error(
          error.message + '/nCart Product loading Unsucessful!!',
          'Error:',
          {
            closeButton: true,
          }
        );
      }
    );
  }
}
