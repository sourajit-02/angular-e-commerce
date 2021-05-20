import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor() {}
  @ViewChild('order') order: any;
  ngOnInit(): void {}
  onSubmit(data: any) {
    console.log(data);
  }
}
