import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./product-list/product-categories/all/all.module').then(
        (m) => m.AllModule
      ),
  },
  {
    path: 'best-seller',
    loadChildren: () =>
      import(
        './product-list/product-categories/best-seller/best-seller.module'
      ).then((m) => m.BestSellerModule),
  },
  {
    path: 'featured',
    loadChildren: () =>
      import('./product-list/product-categories/featured/featured.module').then(
        (m) => m.FeaturedModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
