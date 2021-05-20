import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsPagesComponent } from './cms-pages.component';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { CmsPagesRoutingModule } from './cms-pages-routing.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { PrimeTableModule } from 'src/app/component/primeng/table/prime-table.module';

@NgModule({
  imports: [
    CommonModule,
    CmsPagesRoutingModule,
    ComponentsModule,
    MaterialsModule,
    PrimeTableModule,
  ],
  declarations: [CmsPagesComponent],
})
export class CmsPagesModule {}
