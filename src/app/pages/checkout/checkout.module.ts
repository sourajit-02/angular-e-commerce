import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutUserFormComponent } from './checkout-user-form/checkout-user-form.component';
import { MatCardModule } from '@angular/material/card';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutShippingFormComponent } from './checkout-shipping-form/checkout-shipping-form.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutUserFormComponent,
    CheckoutOrderComponent,
    CheckoutShippingFormComponent,
    CheckoutPaymentComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class CheckoutModule {}
