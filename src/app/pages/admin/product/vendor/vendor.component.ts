import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/core/admin/services/products.service';
import { DialogFormComponent } from '../../../../component/admin/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
})
export class VendorComponent implements OnInit {
  public vendors: any[] = [];
  public tableType: string = 'grid';
  public displayedColumns: Object = {
    vendor_name: 'Vendor Name',
    vendor_company_name: 'Vendor Company Name',
    vendor_email: 'Vendor Email',
    vendor_mobile: 'Vendor Mobile',
    vendor_address: 'Vendor Address',
    vendor_country: 'Vendor Country',
    vendor_city: 'Vendor City',
    vendor_pincode: 'Vendor Pincode',
    vendor_state: 'Vendor State',
    vendor_landmark: 'Vendor Landmark',
    status: 'Status',
    actions: 'Actions',
  };
  public paginationData: Object = {
    length: 10,
    pageSize: 5,
    pageSizeOptions: [2, 3, 5, 7, 10],
  };
  public dataSource: Object[] = [];
  constructor(
    public dialog: MatDialog,
    private productsService: ProductsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadTableData();
  }
  ngOnDestroy() {
    this.loadTableData().unsubscribe();
  }
  loadTableData(): Subscription {
    return this.productsService.getVendors().subscribe(
      (vendors) => {
        if (
          vendors &&
          typeof vendors[0] === 'object' &&
          vendors[0].hasOwnProperty('id')
        ) {
          this.vendors = vendors;
          this.setTableData(this.vendors);
        } else {
          this.vendors = [];
          this.toastr.warning(
            'Vendors List is either empty or undefined or null. All the Vendors are not loaded !!',
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
            'Error: Loading Vendors List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Loading Vendors List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  setTableData(vendors: any[]) {
    this.dataSource = [];
    for (const vendor of vendors) {
      let item: Object = {
        vendor_name: '',
        vendor_id: 0,
        vendor_company_name: '',
        vendor_email: '',
        vendor_mobile: 0,
        vendor_address: '',
        vendor_country: '',
        vendor_city: '',
        vendor_pincode: 0,
        vendor_state: '',
        vendor_landmark: '',
        status: 'Active',
        actions: ['Edit', 'Delete'],
      };
      Object.keys(vendor).forEach((key) => {
        item[key] = vendor[key];
      });
      item['vendor_id'] = vendor['id'];
      this.dataSource.push(item);
    }
    this.paginationData['length'] = vendors.length;
  }
  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.type = 'Vendor';
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.data) {
        console.log('Submitted Form Data!!');
        if (result.event === 'Add') {
          this.addVendor(result.data[0]);
        } else if (result.event === 'Edit') {
          this.editVendor(result.data[0]);
        } else if (result.event === 'Delete') {
          //this.deleteCategory(result.data);
        }
      }
      console.log('The dialog was closed');
    });
  }
  addVendor(data: any) {
    this.productsService.postVendorData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Adding New Vendor to Database was Successful!!
          Vendor Name: ${result.Data.vendor_name}
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
            'Error: Adding New Vendor to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Adding New Vendor to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  emitRowAction(data: any) {
    console.log(data);
    this.openDialog(data.action, { value: data.data });
  }
  editVendor(data: any) {
    this.productsService.putVendorData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Updating Vendor to Database was Successful!!
          Vendor Name: ${result.Data.vendor_name}
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
            'Error: Updating Vendor to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Updating Vendor to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  deleteVendor(data: any) {
    console.log(data);
    this.loadTableData();
  }
}
