import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/admin/guards/auth.guard';

import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../../pages/admin/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
          canActivate: [AuthGuard],
      },
      {
        path: 'modules',
        loadChildren: () =>
          import('../../../pages/admin/modules/modules.module').then(
            (m) => m.ModulesModule
          ),
          canActivate: [AuthGuard],
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../../../pages/admin/product/product.module').then(
            (m) => m.ProductModule
          ),
          canActivate: [AuthGuard],
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../../../pages/admin/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
          canActivate: [AuthGuard],
      },
      {
        path: 'variant',
        loadChildren: () =>
          import('../../../pages/admin/variant/variant.module').then(
            (m) => m.VariantModule
          ),
          canActivate: [AuthGuard],
      },
      {
        path: 'order',
        loadChildren: () =>
          import('../../../pages/admin/order/order.module').then(
            (m) => m.OrderModule
          ),
          canActivate: [AuthGuard],
      },

      {
        path: 'user',
        loadChildren: () =>
          import('../../../pages/admin/users/users.module').then(
            (m) => m.UsersModule
          ),
          canActivate: [AuthGuard],
      },
      {
        path: 'cms-pages',
        loadChildren: () =>
          import('../../../pages/admin/cms-pages/cms-pages.module').then(
            (m) => m.CmsPagesModule
          ),
          canActivate: [AuthGuard],
      },

      {
        path: 'manage-slider',
        loadChildren: () =>
          import('../../../pages/admin/home/home.module').then(
            (m) => m.HomeModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../../../pages/admin/login/login.module').then(
        (m) => m.LoginModule
      ),
   
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule {}
