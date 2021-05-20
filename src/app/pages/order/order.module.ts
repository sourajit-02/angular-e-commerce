import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  imports: [CommonModule, OrderRoutingModule, MaterialsModule],
  declarations: [OrderComponent, OrderDetailComponent],
})
export class OrderModule {}
