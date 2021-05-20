import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { TrackOrderComponent } from './track-order/track-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { PrimeTableModule } from 'src/app/component/primeng/table/prime-table.module';
import { ReturnedOrderComponent } from './returned-order/returned-order.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    ComponentsModule,
    MaterialsModule,
    PrimeTableModule,
  ],
  declarations: [
    OrderComponent,
    TrackOrderComponent,
    NewOrderComponent,
    ReturnedOrderComponent,
  ],
})
export class OrderModule {}
