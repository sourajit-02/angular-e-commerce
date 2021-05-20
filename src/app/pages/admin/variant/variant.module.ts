import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantComponent } from './variant.component';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { VariantRoutingModule } from './variant-routing.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { CategoryVariantComponent } from './category-variant/category-variant.component';
import { VariantDataComponent } from './variant-data/variant-data.component';
import { PrimeTableModule } from 'src/app/component/primeng/table/prime-table.module';
import { VariantMasterComponent } from './variant-master/variant-master.component';

@NgModule({
  imports: [
    CommonModule,
    VariantRoutingModule,
    ComponentsModule,
    MaterialsModule,
    PrimeTableModule,
  ],
  declarations: [
    VariantComponent,
    VariantMasterComponent,
    VariantDataComponent,
    CategoryVariantComponent,
  ],
})
export class VariantModule {}
