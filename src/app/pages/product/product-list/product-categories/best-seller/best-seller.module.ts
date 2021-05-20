import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellerComponent } from './best-seller.component';
import { ProductListModule } from '../../product-list/product-list.module';
import { BestSellerRoutingModule } from './best-seller-routing.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { TitlebarModule } from 'src/app/component/titlebar/titlebar.module';

@NgModule({
  declarations: [BestSellerComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    ProductListModule,
    TitlebarModule,
    BestSellerRoutingModule,
  ],
})
export class BestSellerModule {}
