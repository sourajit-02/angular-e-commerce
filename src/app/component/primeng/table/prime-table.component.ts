import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.scss'],
})
export class PrimeTableComponent implements OnInit {
  @Input() displayedColumns: Object = {};
  @Input() displayItem: Object = {};
  public rows: number = 5;
  public tableData: any[] = [];
  
  public objectKeys = Object.keys;
  public loading: boolean;
  @Output() action: EventEmitter<any> = new EventEmitter<any>();
  @Input() set dataSource(data: Object[]) {
    this.loading = true;
    this.setData(data);
  }
  constructor() {}

  ngOnInit() {}

  setData(data: Object[]){
    let columnData  = [];
    let item = this.displayItem;

    for (const value of data) {
      console.log(value);
      value['actions']= ['Edit', 'Delete'];
      columnData.push(value);
    }
   console.log("columnData",columnData);
   this.setTableDataSource(columnData);
}
  setTableDataSource(data: Object[]) {
    this.tableData = data;
    this.loading = false;
  }
  clear(table: Table) {
    table.clear();
  }
  emitRowAction(data: any) {
    this.action.emit(data);
  }
}
