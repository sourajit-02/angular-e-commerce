import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from '../address/address.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { PasswordComponent } from '../password/password.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'address', component: AddressComponent },
      { path: 'password', component: PasswordComponent },
      {
        path: 'order-history',
        loadChildren: () =>
          import('../../order/order.module').then((m) => m.OrderModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
