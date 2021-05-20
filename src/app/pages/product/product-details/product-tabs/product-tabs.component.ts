import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss'],
})
export class ProductTabsComponent implements OnInit {
  @Input() productDetails: Product;
  constructor() {}
  ngOnInit(): void {}
}
