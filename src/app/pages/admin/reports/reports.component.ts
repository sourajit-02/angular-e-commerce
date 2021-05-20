import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../../component/admin/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-coupon',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  public displayedColumns: Object = {
    title: 'Title',
    startDate: 'Start Date',
    endDate: 'End Date',
    status: 'Status',
    actions: 'Actions',
  };
  public paginationData: Object = {
    length: 10,
    pageSize: 5,
    pageSizeOptions: [2, 3, 5, 7, 10],
  };
  public dataSource: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.url = 'add-coupon';
    obj.type = 'Coupon';
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Submitted Form Data: ');
        if (result.event === 'Add') {
          // this.addCoupon(result.data);
        } else if (result.event === 'Edit') {
          // this.editCoupon(result.data);
        } else if (result.event === 'Delete') {
          //this.deleteCoupon(result.data);
        }
      }
      console.log('The dialog was closed');
      console.log(result.data);
    });
  }
}
