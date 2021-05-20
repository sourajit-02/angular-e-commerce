import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/IProduct';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() productDetails: IProduct;
  public imageWidth: number;
  public imageHeight: number;
  public imageObject: Array<object>;
  constructor() {}

  ngOnInit(): void {
    this.assignImageObject();
    this.changeImageSize(window.innerWidth);
  }
  assignImageObject() {
    this.imageObject = [
      {
        image: '../../../../assets/item/item-08.jpg',
        thumbImage: '../../../../assets/item/item-08.jpg',
        alt: this.productDetails.product_name,
      },
      {
        image: '../../../../assets/item/item-08.jpg',
        thumbImage: '../../../../assets/item/item-08.jpg',
        alt: this.productDetails.product_name,
      },
    ];
  }
  onResize(event: { target: { innerWidth: number } }) {
    let resizeInnerWidth: number = event.target.innerWidth;
    this.changeImageSize(resizeInnerWidth);
  }
  changeImageSize(targetInnerWidth: number) {
    if (targetInnerWidth < 280) {
      this.imageWidth = 190;
      this.imageHeight = 260;
    } else if (targetInnerWidth < 350) {
      this.imageWidth = 245;
      this.imageHeight = 315;
    } else if (targetInnerWidth < 500) {
      this.imageWidth = 285;
      this.imageHeight = 355;
    } else if (targetInnerWidth < 780) {
      this.imageWidth = 380;
      this.imageHeight = 450;
    } else {
      this.imageWidth = 430;
      this.imageHeight = 500;
    }
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
  //       items: 1,
  //     },
  //     740: {
  //       items: 1,
  //     },
  //     940: {
  //       items: 1,
  //     },
  //   },
  //   nav: true,
  // };
}
