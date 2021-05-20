import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
})
export class BestSellerComponent implements OnInit {
  constructor() {}
  public titleImg: string;
  public titleText: string;
  public subTitleText: string;
  ngOnInit() {
    this.titleImg = "'../../../assets/product-top/collection-top.jpg'";
    this.titleText = 'Best Seller';
    this.subTitleText = 'Best Seller Collection 2018';
  }
}
