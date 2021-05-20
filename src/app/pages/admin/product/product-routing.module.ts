import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ClientReviewComponent } from './client-review/client-review.component';
import { LowStockComponent } from './low-stock/low-stock.component';
import { ProductComponent } from './product.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'vendor',
        component: VendorComponent,
      },
      {
        path: 'all-products',
        component: AllproductsComponent,
      },
      {
        path: 'client-review-image',
        component: ClientReviewComponent,
      },
      {
        path: 'low-stock-inventory',
        component: LowStockComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
