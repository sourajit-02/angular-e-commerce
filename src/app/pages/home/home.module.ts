import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { BgBannerComponent } from './bg-banner/bg-banner.component';
import { BlogComponent } from './blog/blog.component';
import { ItemComponent } from './item/item.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ProductListModule } from '../product/product-list/product-list/product-list.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    BgBannerComponent,
    BlogComponent,
    ItemComponent,
    HomeFooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialsModule,
    ProductListModule,
    CarouselModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
