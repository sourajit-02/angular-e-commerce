import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { CategoryComponent } from './category/category.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { PrimeTableModule } from 'src/app/component/primeng/table/prime-table.module';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { BrandComponent } from './brand/brand.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ComponentsModule,
    MaterialsModule,
    PrimeTableModule,
  ],
  declarations: [
    ModulesComponent,
    CategoryComponent,
    LogisticsComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    BrandComponent,
    CompanyInfoComponent,
  ],
})
export class ModulesModule {}
