import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DialogFormComponent } from 'src/app/component/admin/components/dialog-form/dialog-form.component';
import { ProductsService } from 'src/app/core/admin/services/products.service';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.scss'],
})
export class LogisticsComponent implements OnInit {
  public categories: any[] = [];
  public tableType: string = 'grid';
  public displayedColumns: Object = {
    category_name: 'Category Name',
    category_id: 'Category ID',
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
    private productsService: ProductsService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // this.loadTableData();
  }

  // loadTableData(): Subscription {
  //   return this.productsService.getCategories().subscribe(
  //     (categories) => {
  //       if (
  //         categories &&
  //         typeof categories[0] === 'object' &&
  //         categories[0].hasOwnProperty('id')
  //       ) {
  //         this.categories = categories;
  //         this.setTableData(this.categories);
  //       } else {
  //         this.categories = [];
  //         this.toastr.warning(
  //           'Categories List is either empty or undefined or null. All the Categories are not loaded !!',
  //           'Warning:',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //       if (error.message) {
  //         this.toastr.error(
  //           `${error.message}`,
  //           'Error: Loading Categories List was Unsuccessful!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       } else {
  //         this.toastr.error(
  //           `${error}`,
  //           'Error: Loading Categories List was Unsuccessful!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       }
  //     }
  //   );
  // }
  // setTableData(categories: any[]) {
  //   this.dataSource = [];
  //   for (const category of categories) {
  //     let item: Object = {
  //       category_name: '',
  //       category_id: 0,
  //       status: 'Active',
  //       actions: ['Edit', 'Delete'],
  //     };
  //     Object.keys(category).forEach((key) => {
  //       item[key] = category[key];
  //     });
  //     item['category_id'] = category['id'];
  //     this.dataSource.push(item);
  //   }
  //   this.paginationData['length'] = categories.length;
  // }
  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.type = 'Category';
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.data) {
        console.log('Submitted Form Data!!');
        if (result.event === 'Add') {
          // this.addCategory(result.data[0]);
        } else if (result.event === 'Edit') {
          // this.editCategory(result.data[0]);
        } else if (result.event === 'Delete') {
          //this.deleteCategory(result.data);
        }
      }
      console.log('The dialog was closed');
    });
  }
  // addCategory(data: any) {
  //   this.productsService.postCategoryData(data).subscribe(
  //     (result: any) => {
  //       this.loadTableData();
  //       console.log(result);
  //       this.toastr.success(
  //         `Adding New Category to Database was Successful!!
  //         Category Name: ${result.data.category_name}
  //         `,
  //         'Success:',
  //         {
  //           closeButton: true,
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.log(error);
  //       if (error.message) {
  //         this.toastr.error(
  //           `${error.message}`,
  //           'Error: Adding New Category to Database was Unsuccessful!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       } else {
  //         this.toastr.error(
  //           `${error}`,
  //           'Error: Adding New Category to Database was Unsuccessful!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       }
  //     }
  //   );
  // }
  // emitRowAction(data: any) {
  //   console.log(data);
  //   this.openDialog(data.action, { value: data.data });
  // }
  // editCategory(data: any) {
  //   this.productsService.putCategoryData(data).subscribe(
  //     (result: any) => {
  //       this.loadTableData();
  //       console.log(result);
  //       this.toastr.success(
  //         `Updating Category to Database was Successful!!
  //         Category Name: ${result.data.category_name}
  //         `,
  //         'Success:',
  //         {
  //           closeButton: true,
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.log(error);
  //       if (error.message) {
  //         this.toastr.error(
  //           `${error.message}`,
  //           'Error: Updating Category to Database was Unsuccessful!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       } else {
  //         this.toastr.error(
  //           `${error}`,
  //           'Error: Updating Category to Database was Unsuccessful!!',
  //           {
  //             closeButton: true,
  //           }
  //         );
  //       }
  //     }
  //   );
  // }
  // deleteCategory(data: any) {
  //   console.log(data);
  //   this.loadTableData();
  // }
}
