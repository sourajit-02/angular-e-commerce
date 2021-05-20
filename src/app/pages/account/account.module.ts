import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NewAddressComponent } from './new-address/new-address.component';
import { RegisterComponent } from './register/register.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  declarations: [
    LoginComponent,
    UserDetailsComponent,
    NewAddressComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, MaterialsModule],
})
export class AccountModule {}
