import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './featured.component';
import { ProductListModule } from '../../product-list/product-list.module';
import { FeaturedRoutingModule } from './featured-routing.module';
import { TitlebarModule } from 'src/app/component/titlebar/titlebar.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    ProductListModule,
    TitlebarModule,
    MaterialsModule,
    FeaturedRoutingModule,
  ],
  declarations: [FeaturedComponent],
})
export class FeaturedModule {}
