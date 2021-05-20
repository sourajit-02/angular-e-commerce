import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ClientReviewComponent } from './client-review/client-review.component';
import { LowStockComponent } from './low-stock/low-stock.component';
import { VendorComponent } from './vendor/vendor.component';
import { ProductRoutingModule } from './product-routing.module';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { PrimeTableModule } from 'src/app/component/primeng/table/prime-table.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ComponentsModule,
    MaterialsModule,
    PrimeTableModule,
  ],
  declarations: [
    ProductComponent,
    AllproductsComponent,
    ClientReviewComponent,
    VendorComponent,
    LowStockComponent,
  ],
})
export class ProductModule {}
