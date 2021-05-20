import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogFormComponent } from 'src/app/component/admin/components/dialog-form/dialog-form.component';
import { ProductsService } from 'src/app/core/admin/services/products.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.type = 'Company Info';
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.data) {
        console.log('Submitted Form Data!!');
        if (result.event === 'Add') {
          // this.addCategory(result.data[0]);
        }
      }
      console.log('The dialog was closed');
    });
  }
  emitRowAction(data: any) {
    console.log(data);
    this.openDialog(data.action, { value: data.data });
  }
}
