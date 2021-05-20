import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryVariantComponent } from './category-variant/category-variant.component';
import { VariantDataComponent } from './variant-data/variant-data.component';
import { VariantMasterComponent } from './variant-master/variant-master.component';
import { VariantComponent } from './variant.component';

const routes: Routes = [
  {
    path: '',
    component: VariantComponent,
    children: [
      {
        path: 'variant-master',
        component: VariantMasterComponent,
      },
      {
        path: 'variant-data',
        component: VariantDataComponent,
      },
      {
        path: 'variant-master',
        component: CategoryVariantComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariantRoutingModule {}
