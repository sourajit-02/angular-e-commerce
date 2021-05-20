import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DialogFormComponent } from 'src/app/component/admin/components/dialog-form/dialog-form.component';
import { PagesService } from 'src/app/core/admin/services/pages.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  public categories: any[] = [];
  public tableType: string = 'grid';
  public displayedColumns: Object = {
    id: 'City Id',
    city_name: 'City Name',
    city_value:'City Value',
    state_name:'State',
    country_name: 'Country',
    actions: 'Actions',
  };
  public Item: Object = {
    id: 0,
    city_name: '',
    city_value:'',
    state_name:'',
    country_name: '',
    actions: ['Edit', 'Delete'],
  };
  public paginationData: Object = {
    length: 10,
    pageSize: 5,
    pageSizeOptions: [2, 3, 5, 7, 10],
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
    return this.pagesService.getCityList().subscribe(
      (cityData) => {
        this.dataSource  = cityData;
      }
    );
  }
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
