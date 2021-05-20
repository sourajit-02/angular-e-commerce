import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { CityComponent } from './city/city.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CountryComponent } from './country/country.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ModulesComponent } from './modules.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'country',
        component: CountryComponent,
      },
      {
        path: 'state',
        component: StateComponent,
      },
      {
        path: 'city',
        component: CityComponent,
      },
      {
        path: 'brand',
        component: BrandComponent,
      },
      {
        path: 'logistics',
        component: LogisticsComponent,
      },
      {
        path: 'company-info',
        component: CompanyInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
