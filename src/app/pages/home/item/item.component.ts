import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/core/models/IProduct';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public productList: IProduct[];
  public authUser: boolean = false;
  constructor(
    private productService: ProductService,
    private auth: AuthService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getProductList();
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
      780: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 4,
      },
      1600: {
        items: 4,
      },
      1800: {
        items: 4,
      },
      2200: {
        items: 4,
      },
    },
    nav: true,
  };
}
