import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  constructor() {}
  public titleImg: string;
  public titletext: string;

  ngOnInit() {
    this.titleImg = "'../../../assets/product-top/collection-top.jpg'";
    this.titletext = 'products';
  }
}
