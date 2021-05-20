import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/core/services/order-detail.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  constructor(private orderDetail: OrderDetailService) {}

  name = this.orderDetail.name;
  address = this.orderDetail.address;
  phone = this.orderDetail.phone;
  email = this.orderDetail.email;

  title: string;

  ngOnInit(): void {}
}
