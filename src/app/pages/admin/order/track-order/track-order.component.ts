import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finances',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss'],
})
export class TrackOrderComponent implements OnInit {
  public currentRoute: string;
  public displayedColumns: Object = {
    orderId: 'Order ID',
    subTotal: 'Sub Total',
    discount: 'Discount',
    shipping: 'Shipping',
    totalTax: 'Total Tax',
    total: 'Total',
    invoiceDate: 'Invoice Date',
    actions: 'Actions',
  };

  public paginationData: Object = {
    length: 10,
    pageSize: 5,
    pageSizeOptions: [2, 3, 5, 7, 10],
  };
  public dataSource: any;
  public title: string = 'GST & Finance';
  constructor() {}

  ngOnInit() {}
}
