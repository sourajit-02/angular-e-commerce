import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailService {
  date: string;
  status: string;
  subtotalprice: number;
  shipping: number;
  tax: number;
  total: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;

  constructor() {
    this.image = './assets/order-detail/banner-08.jpg';
    this.date = 'October 19, 2020';
    this.status = 'Pending';
    this.subtotalprice = 1309.0;
    this.shipping = 25.0;
    this.tax = 262;
    this.total = 1596;
    this.name = 'Ryan Ford';
    this.address =
      'Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178';
    this.phone = '38 972 588-42-36';
    this.email = 'stroyka@example.com';
  }

  columnsToDisplay2: string[] = ['product', 'total'];
  dataSource2 = new MatTableDataSource<TableElement>(Table_Data);
}
export interface TableElement {
  product: string;
  total: number;
}

const Table_Data: TableElement[] = [
  { product: 'Brandix Spark Plug Kit ASR-400 × 2', total: 38.0 },
  { product: 'Brandix Brake Kit BDX-750Z370-S × 1', total: 224.0 },
  { product: 'Left Headlight Of Brandix Z54 × 3', total: 1047.0 },
];
