import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../../../component/admin/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.url = 'add-menu';
    obj.type = 'Menu';
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Submitted Form Data: ');
        if (result.event === 'Add') {
          // this.addMenu(result.data);
        } else if (result.event === 'Edit') {
          // this.editMenu(result.data);
        } else if (result.event === 'Delete') {
          //this.deleteMenu(result.data);
        }
      }
      console.log('The dialog was closed');
      console.log(result.data);
    });
  }
}
