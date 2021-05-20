import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss'],
})
export class CheckoutPaymentComponent implements OnInit, AfterViewInit {
  constructor() {}
  public paymentMethods: any[] = [
    {
      method: 'Direct bank transfer',
      content:
        'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
      checked: true,
      value: 'bank_transfer',
    },
    {
      method: 'Cheque payment',
      content: 'Please send a check to 715 Fake Street, New York 10021 USA.',
      value: 'cheque_payment',
    },
    {
      method: 'Cash on delivery',
      content: 'Pay with cash upon delivery.',
      value: 'cod',
    },
    {
      method: 'PayPal',
      content:
        "Pay via PayPal. You can pay with your credit card if you don't have a PayPal account.",
      value: 'paypal',
    },
  ];
  ngOnInit() {}
  ngAfterViewInit() {
    this.togglePaymentMethod(this.paymentMethods[0].value);
  }
  checked(event: any) {
    let value = event.target.value;
    this.togglePaymentMethod(value);
  }
  togglePaymentMethod(data: any) {
    this.paymentMethods.forEach((method) => {
      let payment = document.getElementById(method.value);
      if (data === method.value) {
        payment.classList.add('payment-methods-item-active');
      } else {
        payment.classList.remove('payment-methods-item-active');
      }
    });
  }
}
