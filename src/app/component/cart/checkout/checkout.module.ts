import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartModule } from '../cart.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MaterialsModule,
    FontAwesomeModule,
    CartModule,
  ],
  exports: [BillingInfoComponent, OrderInfoComponent],
  declarations: [BillingInfoComponent, OrderInfoComponent, CheckoutComponent],
})
export class CheckoutModule {}
