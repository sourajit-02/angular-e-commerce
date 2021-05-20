import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

const materialModules = [
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  ReactiveFormsModule,
  FormsModule,
  MatDividerModule,
  MatToolbarModule,
  MatSelectModule,
  MatGridListModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatPaginatorModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatDividerModule,
  MatTableModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatRadioModule,
  MatExpansionModule,
  MatSortModule,
  MatDialogModule,
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialsModule {}
