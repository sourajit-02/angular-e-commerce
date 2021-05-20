import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss'],
})
export class GridTableComponent implements OnInit, AfterViewInit {
  @Input() filter: boolean = false;
  @Input() pagination: boolean = false;
  // @Input() sortable: boolean = false;
  @Input() displayedColumns: Object = {};
  @Input() paginationData: Object = {};
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() action: EventEmitter<any> = new EventEmitter<any>();
  public dataSource = new MatTableDataSource([]);
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }
  public pageEvent: PageEvent;
  public objectKeys = Object.keys;
  constructor() {}

  ngOnInit() {
    console.log(this.dataSource);
    console.log(this.dataSource.data);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  setTableDataSource(data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
  }
  emitRowAction(data: any) {
    this.action.emit(data);
  }
}
