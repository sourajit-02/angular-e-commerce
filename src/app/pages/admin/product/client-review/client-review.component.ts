import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../../../component/admin/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss'],
})
export class ClientReviewComponent implements OnInit {
  public tableType: string = 'flex';
  public displayedColumns: Object = {
    image: 'Image',
    productName: 'Product Name',
    actions: 'Actions',
  };
  public paginationData: Object = {
    length: 10,
    pageSize: 5,
    pageSizeOptions: [2, 3, 5, 7, 10],
  };
  public dataSource: any[] = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.url = 'add-client-review-image';
    obj.type = 'Client Review Image';
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
