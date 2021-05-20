import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-products',
  templateUrl: './offer-products.component.html',
  styleUrls: ['./offer-products.component.scss'],
})
export class OfferProductsComponent implements OnInit {
  public displayedColumns: Object = {
    title: 'Title',
    totalProduct: 'Total Product',
    status: 'Status',
    actions: 'Actions',
  };
  public paginationData: Object = {
    length: 10,
    pageSize: 5,
    pageSizeOptions: [2, 3, 5, 7, 10],
  };
  public dataSource: any;
  constructor() {}

  ngOnInit() {}
}
