import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ProductReportsComponent } from './product-reports/product-reports.component';
import { PrimeTableModule } from 'src/app/component/primeng/table/prime-table.module';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ComponentsModule,
    MaterialsModule,
    PrimeTableModule,
  ],
  declarations: [ReportsComponent, ProductReportsComponent],
})
export class ReportsModule {}
