import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  constructor() {}
  public titleImg: string;
  public titleText: string;
  public subTitleText: string;
  ngOnInit() {
    this.titleImg = "'../../../assets/product-top/collection-top.jpg'";
    this.titleText = 'featured';
    this.subTitleText = 'Featured Collection 2018';
  }
}
