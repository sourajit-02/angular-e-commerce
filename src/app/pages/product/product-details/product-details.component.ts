import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/core/models/IProduct';
import { ProductService } from 'src/app/core/services/product.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public productDetails: IProduct;
  public colBreakpoint = 12;
  public rowBreakpoint: number;
  public cardColspan: number;
  public infoColspan: number;
  public rowspan = 2;
  public tabsRowspan: number;
  public tabsColspan = 12;
  public gutterBreakpoint: number;
  public currentRoute: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getCurrentRoute();
    this.getBreakpoints(window.innerWidth);
  }

  onResize(event: { target: { innerWidth: number } }) {
    let resizeInnerWidth: number = event.target.innerWidth;
    this.getBreakpoints(resizeInnerWidth);
  }
  getBreakpoints(targetInnerWidth: number) {
    if (targetInnerWidth > 960) {
      this.rowBreakpoint = 400;
      this.cardColspan = 7;
      this.infoColspan = 5;
      this.tabsRowspan = 3;
      this.gutterBreakpoint = 24;
    } else if (targetInnerWidth > 780) {
      this.rowBreakpoint = 450;
      this.cardColspan = 8;
      this.infoColspan = 4;
      this.tabsRowspan = 3;
      this.gutterBreakpoint = 20;
    } else if (targetInnerWidth > 350) {
      this.rowBreakpoint = 380;
      this.cardColspan = 12;
      this.infoColspan = 12;
      this.tabsRowspan = 4;
      this.gutterBreakpoint = 0;
    } else if (targetInnerWidth > 280) {
      this.rowBreakpoint = 450;
      this.cardColspan = 12;
      this.infoColspan = 12;
      this.tabsRowspan = 4;
      this.gutterBreakpoint = 0;
    } else {
      this.rowBreakpoint = 450;
      this.cardColspan = 12;
      this.infoColspan = 12;
      this.tabsRowspan = 5;
      this.gutterBreakpoint = 0;
    }
  }

  getCurrentRoute() {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.currentRoute = parseInt(params.get('id'));
        this.getProductList(this.currentRoute);
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Product Details page route Loading Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Product Details page route Loading Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  getProductList(id: number) {
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        if (products) {
          this.productDetails = _.find(products, (element) => {
            if (element.product_id === id) {
              return true;
            }
          });
        } else {
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
}
