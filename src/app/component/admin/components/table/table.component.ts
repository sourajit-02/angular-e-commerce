import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableType: string = 'grid';
  @Input() filter: boolean = false;
  @Input() pagination: boolean = false;
  @Input() displayedColumns: Object = {};
  @Input() tableData: Object[];
  @Input() paginationData: Object = {};
  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
  emitRowAction(data: any) {
    this.action.emit(data);
  }
}
