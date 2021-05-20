import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/product.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss'],
})
export class RelatedProductsComponent implements OnInit {
  public productList: Array<Product>;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.productList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 2,
  //     },
  //     740: {
  //       items: 3,
  //     },
  //     940: {
  //       items: 4,
  //     },
  //   },
  //   nav: true,
  // };
}
