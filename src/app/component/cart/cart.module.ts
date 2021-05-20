import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './cart-ui/cart-item/cart-item.component';
import { AddToCartComponent } from './cart-ui/add-to-cart/add-to-cart.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialsModule,
    OverlayPanelModule,
  ],
  exports: [CartItemComponent, AddToCartComponent],
  declarations: [CartItemComponent, AddToCartComponent],
})
export class CartModule {}
