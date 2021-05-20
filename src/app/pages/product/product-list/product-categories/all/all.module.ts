import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all.component';
import { AllRoutingModule } from './all-routing.module';
import { ProductListModule } from '../../product-list/product-list.module';
import { TitlebarModule } from 'src/app/component/titlebar/titlebar.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    AllRoutingModule,
    MaterialsModule,
    ProductListModule,
    TitlebarModule,
  ],
  declarations: [AllComponent],
})
export class AllModule {}
