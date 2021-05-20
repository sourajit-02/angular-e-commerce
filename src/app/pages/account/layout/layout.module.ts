import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from '../navigation/navigation.component';
import { PasswordComponent } from '../password/password.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddressComponent } from '../address/address.component';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialsModule,
    FontAwesomeModule,
    ComponentsModule,
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    EditProfileComponent,
    NavigationComponent,
    PasswordComponent,
    AddressComponent,
  ],
})
export class LayoutModule {}
