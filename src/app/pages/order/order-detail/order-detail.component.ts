import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/core/services/order-detail.service';

export interface NavElement {
  nav: string;
}

const NAV_Data: NavElement[] = [
  { nav: 'Dashboard' },
  { nav: 'Edit Profile' },
  { nav: 'Order History' },
  { nav: 'Addresses' },
  { nav: 'Password' },
];

export interface PriceTable {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const Price_Data: PriceTable[] = [
  { subtotal: 1309, shipping: 1309, tax: 1309, total: 1309 },
  { subtotal: 1309, shipping: 1309, tax: 1309, total: 1309 },
  { subtotal: 1309, shipping: 1309, tax: 1309, total: 1309 },
];

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements AfterViewInit {
  title: string;

  constructor(private orderDetail: OrderDetailService) {}

  date = this.orderDetail.date;
  status = this.orderDetail.status;
  subtotal = this.orderDetail.subtotalprice;
  shipping = this.orderDetail.shipping;
  tax = this.orderDetail.tax;
  total = this.orderDetail.total;
  name = this.orderDetail.name;
  address = this.orderDetail.address;
  phone = this.orderDetail.phone;
  email = this.orderDetail.email;

  columnsToDisplay2: string[];
  dataSource2 = this.orderDetail.dataSource2;

  priceTable = Price_Data;

  columnsToDisplay: string[] = ['navigation'];
  dataSource = NAV_Data;

  ngAfterViewInit() {
    this.columnsToDisplay2 = this.orderDetail.columnsToDisplay2;
  }
}
