import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewCartRoutingModule } from './view-cart-routing.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  declarations: [ViewCartComponent],
  imports: [CommonModule, ViewCartRoutingModule, MaterialsModule],
})
export class ViewCartModule {}
