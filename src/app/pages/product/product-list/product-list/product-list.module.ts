import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from '../../product-item/product-item.component';
import { LeftbarComponent } from '../../leftbar/leftbar.component';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, LeftbarComponent],
  imports: [CommonModule, MaterialsModule, RouterModule],
  exports: [ProductListComponent, ProductItemComponent],
})
export class ProductListModule {}
