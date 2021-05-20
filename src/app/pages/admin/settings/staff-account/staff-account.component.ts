import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../../../component/admin/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-staff-account',
  templateUrl: './staff-account.component.html',
  styleUrls: ['./staff-account.component.scss'],
})
export class StaffAccountComponent implements OnInit {
  public displayedColumns: Object = {
    staffName: 'Staff Name',
    emailID: 'Email ID',
    mobile: 'Mobile',
    createdDate: 'Created Date',
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
    obj.url = 'add-staff-account';
    obj.type = 'Staff Account';
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Submitted Form Data: ');
        if (result.event === 'Add') {
          // this.add(result.data);
        } else if (result.event === 'Edit') {
          // this.edit(result.data);
        } else if (result.event === 'Delete') {
          //this.delete(result.data);
        }
      }
      console.log('The dialog was closed');
      console.log(result.data);
    });
  }
}
