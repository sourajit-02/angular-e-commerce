import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeTableComponent } from './prime-table.component';
import { TableModule as Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  imports: [CommonModule, Table, ButtonModule, InputTextModule],
  declarations: [PrimeTableComponent],
  exports: [PrimeTableComponent],
})
export class PrimeTableModule {}
