import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-flex-table',
  templateUrl: './flex-table.component.html',
  styleUrls: ['./flex-table.component.scss'],
})
export class FlexTableComponent implements OnInit, AfterViewInit, OnChanges {
  public dataSource: MatTableDataSource<unknown>;
  @Input() filter: boolean = false;
  @Input() pagination: boolean = false;
  @Input() displayedColumns: Object;
  @Input() tableData: Object[];
  @Input() paginationData: Object;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public objectKeys = Object.keys;
  @ViewChild(MatTable, { static: true }) flexTable: MatTable<any>;
  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
    console.log(this.dataSource);
    console.log(this.tableData);
    console.log(this.flexTable);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.dataSource);
    console.log(this.tableData);
    console.log(this.flexTable);
    // this.dataSource.data = this.tableData;
  }
  ngAfterViewInit() {
    console.log(this.flexTable);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.flexTable.dataSource);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
