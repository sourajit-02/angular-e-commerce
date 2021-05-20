import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-reports',
  templateUrl: './product-reports.component.html',
  styleUrls: ['./product-reports.component.scss'],
})
export class ProductReportsComponent implements OnInit {
  public reports = [
    { type: 'Top Product by unit Hot' },
    { type: 'Top Product by unit Trending' },
    { type: 'Top Product by unit Selling' },
    { type: 'Top Product by unit Abandoned' },
    { type: 'Top Product by unit Not Selling' },
    { type: 'Top Product by unit Wishlist' },
    { type: 'Top Product by unit Prepaid' },
    { type: 'Top Product by unit COD' },
    { type: 'Top Product by unit Cities' },
    { type: 'Top Product by unit Low Stock' },
    { type: 'Top Product by unit Out of Stock' },
  ];
  constructor() {}

  ngOnInit() {}
}
