import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductReportsComponent } from './product-reports/product-reports.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: 'product-view-reports',
        component: ProductReportsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
