import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../../pages/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../../pages/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../cart/cart.module').then((m) => m.CartModule),
      },
      // {
      //   path: 'orders',
      //   loadChildren: () =>
      //     import('../../pages/order/order.module').then((m) => m.OrderModule),
      // },
      {
        path: 'about',
        loadChildren: () =>
          import('../../pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../../pages/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('../../pages/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
