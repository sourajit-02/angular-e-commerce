import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DialogFormComponent } from 'src/app/component/admin/components/dialog-form/dialog-form.component';
import { FormsModel } from 'src/app/core/admin/models/FormsModel';
import { VariantData } from 'src/app/core/admin/models/VariantData';
import { PagesService } from 'src/app/core/admin/services/pages.service';

@Component({
  selector: 'app-variant-data',
  templateUrl: './variant-data.component.html',
  styleUrls: ['./variant-data.component.scss'],
})
export class VariantDataComponent implements OnInit {
  public dropdown_data: any = [];
  public variantDataFormField: FormsModel[] = [
    {
      fieldType: 'select',
      label: 'Variant ID',
      values: this.dropdown_data,
      placeholder: 'Variant ID',
      controller: 'variant_id',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Variant Data',
      type: 'text',
      placeholder: 'Variant Data',
      controller: 'variant_data',
      validators: [Validators.required],
    },
    {
      fieldType: 'input',
      label: 'Variant Code',
      type: 'text',
      placeholder: 'Variant Code',
      controller: 'variant_code',
      validators: [Validators.required],
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
  public variant_data: VariantData[] = [];
  public tableType: string = 'grid';
  public displayedColumns: Object = {
    variant_id: 'Variant ID',
    variant_data: 'Variant Data',
    variant_code: 'Variant Code',
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
    this.loadVariantDropdown();
  }
  loadTableData(): Subscription {
    return this.pagesService.getVariantData().subscribe(
      (variant_data) => {
        if (variant_data.length !== 0) {
          this.variant_data = variant_data;
          this.setTableData(this.variant_data);
        } else {
          this.variant_data = [];
          this.toastr.warning(
            'Variant Data List is either empty or undefined or null. All the Variant Data are not loaded !!',
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
            'Error: Loading Variant Data List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Loading Variant Data List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  loadVariantDropdown(): Subscription {
    return this.pagesService
      .getVariantActiveData()
      .subscribe((variant_data) => {
        this.dropdown_data = variant_data.map(function (value) {
          return value;
        });
      });
  }
  setTableData(variant_data: VariantData[]) {
    this.dataSource = [];
    for (const variant of variant_data) {
      let item: Object = {
        id: 1,
        variant_id: 1,
        variant_data: '',
        variant_code: '',
        actions: ['Edit', 'Delete'],
      };
      Object.keys(variant).forEach((key) => {
        if (item.hasOwnProperty(key) && variant[key]) {
          item[key] = variant[key];
        }
      });
      this.dataSource.push(item);
    }
  }
  openDialog(action: string, obj: any): void {
    this.variantDataFormField[0].values = this.dropdown_data;
    console.log(this.variantDataFormField);
    obj.action = action;
    obj.type = 'Variant Data';
    obj.formField = this.variantDataFormField;
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.data) {
        console.log('Submitted Form Data!!');
        if (result.event === 'Add') {
          console.log(result.data[0]);
          this.addVariantData(result.data[0]);
        } else if (result.event === 'Edit') {
          console.log(result.data[0]);
          this.editVariantData(result.data[0]);
        } else if (result.event === 'Delete') {
          console.log(result.data[0]);
          this.deleteVariantData(result.data);
        }
      }
      console.log('The dialog was closed');
    });
  }
  addVariantData(data: any) {
    this.pagesService.postVariantData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Adding New Variant Data to Database was Successful!!
          Variant Data Code: ${result.data.variant_code}
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
            'Error: Adding New Variant Data to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Adding New Variant Data to Database was Unsuccessful!!',
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
  editVariantData(data: any) {
    this.pagesService.putVariantData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Updating Variant Data to Database was Successful!!
          Variant Data Code: ${result.data.variant_code}
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
            'Error: Updating Variant Data to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Updating Variant Data to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  deleteVariantData(data: any) {
    this.pagesService.deleteVariantData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Deleting Variant Data to Database was Successful!!
            Variant Data Code: ${result.data.variant_code}
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
            'Error: Deleting Variant Data to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Deleting Variant Data to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
}
