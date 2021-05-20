import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    FooterRoutingModule,
    MaterialsModule,
    FontAwesomeModule,
  ],
  exports: [FooterComponent],
  declarations: [FooterComponent],
})
export class FooterModule {}
