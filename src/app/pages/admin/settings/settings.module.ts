import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { BillingComponent } from './billing/billing.component';
import { GeneralComponent } from './general/general.component';
import { PaymentComponent } from './payment/payment.component';
import { PickupAddressComponent } from './pickup-address/pickup-address.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StaffAccountComponent } from './staff-account/staff-account.component';
import { StoreAppsComponent } from './store-apps/store-apps.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SettingsRoutingModule,
    MaterialsModule,
  ],
  declarations: [
    SettingsComponent,
    GeneralComponent,
    StaffAccountComponent,
    PaymentComponent,
    ShippingComponent,
    BillingComponent,
    StoreAppsComponent,
    PickupAddressComponent,
  ],
})
export class SettingsModule {}
