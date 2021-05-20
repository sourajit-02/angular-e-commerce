import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/component/admin/components/components.module';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { PrimeTableModule } from 'src/app/component/primeng/table/prime-table.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ComponentsModule,
    MaterialsModule,
    PrimeTableModule,
  ],
  declarations: [UsersComponent],
})
export class UsersModule {}
