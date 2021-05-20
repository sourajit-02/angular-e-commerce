import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { GeneralComponent } from './general/general.component';
import { LogisticsComponent } from '../modules/logistics/logistics.component';
import { PaymentComponent } from './payment/payment.component';
import { PickupAddressComponent } from './pickup-address/pickup-address.component';
import { SettingsComponent } from './settings.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StaffAccountComponent } from './staff-account/staff-account.component';
import { StoreAppsComponent } from './store-apps/store-apps.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'staff-account',
        component: StaffAccountComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'shipping',
        component: ShippingComponent,
      },
      {
        path: 'billing',
        component: BillingComponent,
      },
      {
        path: 'store-apps',
        component: StoreAppsComponent,
      },
      {
        path: 'pickup-address',
        component: PickupAddressComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
