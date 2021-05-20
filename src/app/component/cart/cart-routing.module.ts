import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoadGuard } from 'src/app/core/guards/auth-load.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-cart'
  },
  {
    path: 'view-cart',
    loadChildren: () =>
      import('./view-cart/view-cart.module').then((m) => m.ViewCartModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
