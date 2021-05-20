import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [CommonModule, MaterialsModule, LoginRoutingModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
