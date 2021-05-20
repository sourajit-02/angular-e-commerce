import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DialogFormComponent } from 'src/app/component/admin/components/dialog-form/dialog-form.component';
import { FormsModel } from 'src/app/core/admin/models/FormsModel';
import { VariantMaster } from 'src/app/core/admin/models/VariantMaster';
import { PagesService } from 'src/app/core/admin/services/pages.service';

@Component({
  selector: 'app-variant-master',
  templateUrl: './variant-master.component.html',
  styleUrls: ['./variant-master.component.scss'],
})
export class VariantMasterComponent implements OnInit {
  public variantMasterFormField: FormsModel[] = [
    {
      fieldType: 'input',
      label: 'Variant Name',
      type: 'text',
      placeholder: 'Variant Name',
      controller: 'variant_name',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Alias',
      type: 'text',
      placeholder: 'Alias',
      controller: 'variant_alias',
      validators: [Validators.required],
    },
    {
      fieldType: 'checkbox',
      label: 'Status',
      controller: 'is_active',
    },
    {
      fieldType: 'input',
      label: 'ID',
      type: 'number',
      placeholder: 'ID',
      controller: 'id',
      hidden: true,
    },
    {
      fieldType: 'input',
      label: 'Created By',
      type: 'text',
      value: 'admin',
      placeholder: 'Created By',
      controller: 'created_by',
      hidden: true,
    },
    {
      fieldType: 'input',
      label: 'Updated By',
      type: 'text',
      value: 'admin',
      placeholder: 'Updated By',
      controller: 'updated_by',
      hidden: true,
    },
  ];
  public variant_masters: VariantMaster[] = [];
  public tableType: string = 'grid';
  public displayedColumns: Object = {
    id: 'Variant ID',
    variant_name: 'Variant Name',
    variant_alias: 'Alias',
    is_active: 'Status',
    actions: 'Actions',
  };
  public dataSource: Object[] = [];
  constructor(
    private pagesService: PagesService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadTableData();
  }
  loadTableData(): Subscription {
    return this.pagesService.getVariantMasters().subscribe(
      (variant_masters) => {
        if (variant_masters.length !== 0) {
          this.variant_masters = variant_masters;
          this.setTableData(this.variant_masters);
        } else {
          this.variant_masters = [];
          this.toastr.warning(
            'Variant Master List is either empty or undefined or null. All the Variant Master are not loaded !!',
            'Warning:',
            {
              closeButton: true,
            }
          );
        }
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Loading Variant Master List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Loading Variant Master List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  setTableData(variant_masters: VariantMaster[]) {
    this.dataSource = [];
    for (const variant_master of variant_masters) {
      let item: Object = {
        id: 0,
        variant_name: '',
        variant_alias: '',
        is_active: false,
        actions: ['Edit', 'Delete'],
      };
      Object.keys(variant_master).forEach((key) => {
        if (item.hasOwnProperty(key) && variant_master[key]) {
          item[key] = variant_master[key];
        }
      });
      if (variant_master.is_active === 1) {
        item['is_active'] = true;
      } else if (variant_master.is_active === 0) {
        item['is_active'] = false;
      }
      this.dataSource.push(item);
    }
  }
  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.type = 'Variant Master';
    obj.formField = this.variantMasterFormField;
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.data) {
        console.log('Submitted Form Data!!');
        if (result.event === 'Add') {
          this.addVariantMaster(result.data[0]);
        } else if (result.event === 'Edit') {
          this.editVariantMaster(result.data[0]);
        } else if (result.event === 'Delete') {
          this.deleteVariantMaster(result.data);
        }
      }
      console.log('The dialog was closed');
    });
  }
  addVariantMaster(data: any) {
    this.pagesService.postVariantMaster(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Adding New Variant Master to Database was Successful!!
          Variant Master Name: ${result.data.variant_name}
          `,
          'Success:',
          {
            closeButton: true,
          }
        );
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Adding New Variant Master to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Adding New Variant Master to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  emitRowAction(data: any) {
    this.openDialog(data.action, { value: data.data });
  }
  editVariantMaster(data: any) {
    this.pagesService.putVariantMaster(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Updating Variant Master to Database was Successful!!
          Variant Master Name: ${result.data.variant_name}
          `,
          'Success:',
          {
            closeButton: true,
          }
        );
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Updating Variant Master to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Updating Variant Master to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  deleteVariantMaster(data: any) {
    this.pagesService.deleteVariantMaster(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Deleting Variant Master to Database was Successful!!
            Variant Master Name: ${result.data.variant_name}
            `,
          'Success:',
          {
            closeButton: true,
          }
        );
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Deleting Variant Master to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Deleting Variant Master to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
}
