import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../../../component/admin/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-pickup-address',
  templateUrl: './pickup-address.component.html',
  styleUrls: ['./pickup-address.component.scss'],
})
export class PickupAddressComponent implements OnInit {
  public displayedColumns: Object = {
    warehouseID: 'ITL Warehouse ID',
    nickName: 'Nick Name',
    address1: 'Address 1',
    address2: 'Address 2',
    country: 'Country',
    state: 'State',
    city: 'City',
    pincode: 'Pincode',
    mobile: 'Mobile',
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
    obj.url = 'add-pickup-address';
    obj.type = 'Pickup Address';
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
