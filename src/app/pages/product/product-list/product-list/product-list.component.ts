import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/core/models/IProduct';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList: IProduct[];
  public rowBreakpoint: number;
  public colBreakpoint: number;
  public leftbarRowspan = 4;
  public authUser: boolean = false;
  constructor(
    private productService: ProductService,
    private auth: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProductList();
    this.getBreakpoints(window.innerWidth);
    this.authUser = this.auth.authUser();
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        if (products) {
          this.productList = products;
        } else {
          this.productList = [];
          this.toastr.warning(
            'Products List is either empty or undefined or null.All the products are not loaded !!',
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
            'Error: Loading Product List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Loading Product List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }

  onResize(event: { target: { innerWidth: number } }) {
    let resizeInnerWidth: number = event.target.innerWidth;
    this.getBreakpoints(resizeInnerWidth);
  }

  getBreakpoints(targetInnerWidth: number) {
    if (targetInnerWidth > 1900) {
      this.colBreakpoint = 4;
      this.rowBreakpoint = 360;
    } else if (targetInnerWidth > 1800) {
      this.colBreakpoint = 4;
      this.rowBreakpoint = 320;
    } else if (targetInnerWidth > 1690) {
      this.colBreakpoint = 4;
      this.rowBreakpoint = 300;
    } else if (targetInnerWidth > 1480) {
      this.colBreakpoint = 4;
      this.rowBreakpoint = 280;
    } else if (targetInnerWidth > 1330) {
      this.colBreakpoint = 4;
      this.rowBreakpoint = 250;
    } else if (targetInnerWidth > 1260) {
      this.colBreakpoint = 4;
      this.rowBreakpoint = 225;
      this.leftbarRowspan = 6;
    } else if (targetInnerWidth > 1080) {
      this.colBreakpoint = 3;
      this.rowBreakpoint = 280;
      this.leftbarRowspan = 8;
    } else if (targetInnerWidth > 870) {
      this.colBreakpoint = 3;
      this.rowBreakpoint = 250;
      this.leftbarRowspan = 6;
    } else if (targetInnerWidth > 760) {
      this.colBreakpoint = 3;
      this.rowBreakpoint = 200;
      this.leftbarRowspan = 8;
    } else if (targetInnerWidth > 600) {
      this.colBreakpoint = 2;
      this.rowBreakpoint = 250;
      this.leftbarRowspan = 8;
    } else if (targetInnerWidth > 550) {
      this.colBreakpoint = 2;
      this.rowBreakpoint = 210;
      this.leftbarRowspan = 12;
    } else if (targetInnerWidth > 480) {
      this.colBreakpoint = 1;
      this.rowBreakpoint = 350;
      this.leftbarRowspan = 2;
    } else if (targetInnerWidth > 390) {
      this.colBreakpoint = 1;
      this.rowBreakpoint = 310;
      this.leftbarRowspan = 3;
    } else if (targetInnerWidth > 350) {
      this.colBreakpoint = 1;
      this.rowBreakpoint = 250;
      this.leftbarRowspan = 3;
    } else if (targetInnerWidth > 290) {
      this.colBreakpoint = 1;
      this.rowBreakpoint = 225;
      this.leftbarRowspan = 4;
    } else {
      this.colBreakpoint = 1;
      this.rowBreakpoint = 200;
      this.leftbarRowspan = 4;
    }
  }
}
