import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { OrderHistoryService } from 'src/app/core/services/order-history.service';

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

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements AfterViewInit {
  title: string;

  constructor(private orderService: OrderHistoryService) {}

  displayedColumns: string[];
  dataSource = this.orderService.dataSource;
  columnsToDisplay: string[] = ['navigation'];
  dataSource2 = NAV_Data;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.displayedColumns = this.orderService.displayedColumns;

    this.dataSource.paginator = this.paginator;
  }
}
