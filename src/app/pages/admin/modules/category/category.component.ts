import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/core/admin/models/Category';
import { FormsModel } from 'src/app/core/admin/models/FormsModel';
import { PagesService } from 'src/app/core/admin/services/pages.service';
import { DialogFormComponent } from '../../../../component/admin/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public categoryFormField: FormsModel[] = [
    {
      fieldType: 'input',
      label: 'Category Id',
      type: 'text',
      value: '',
      placeholder: 'Category Id',
      controller: 'id',
      isDisable: true,
      method: 'edit',
    },
    {
      fieldType: 'input',
      label: 'Category Name',
      type: 'text',
      value: '',
      placeholder: 'Category Name',
      controller: 'category_name',
      method: 'all',
    },
    {
      fieldType: 'input',
      label: 'Category Code',
      type: 'text',
      value: '',
      placeholder: 'Category Code',
      controller: 'category_code',
      method: 'all',
    }, {
      fieldType: 'select',
      label: 'Parent Category',
      values: [
        { name: 'Category 1', value: 1 },
        {name: 'Category 2', value: 2, children:[{ name: 'Category 1', value: 1 ,children:[ { name: 'Category 1', value: 1 }]}]  },
      ],
      placeholder: 'Parent Category',
      controller: 'parent_id',
      method: 'all',
    },
    {
      fieldType: 'input',
      label: 'Created By',
      type: 'text',
      value: 'admin',
      placeholder: 'Created By',
      controller: 'created_by',
      hidden: true,
      method: 'add',
    },
    {
      fieldType: 'input',
      label: 'Updated By',
      type: 'text',
      value: 'admin',
      placeholder: 'Updated By',
      controller: 'updated_by',
      hidden: true,
      method: 'edit',
    },
  ];
  public categories: Category[] = [];
  public tableType: string = 'grid';
  public displayedColumns: Object = {
    id: 'Category Id',
    category_name: 'Category Name',
    category_code: 'Category Code',
    is_active: 'Status',
    actions: 'Actions',
  };
  public Item: Object = {
    id: 0,
    category_name: '',
    category_code: '',
    is_active: '',
    actions: ['Edit', 'Delete'],
  };
  public dataSource: Object[] = [];
  constructor(
    private pagesService: PagesService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadTableData();
  }
  loadTableData(): Subscription {
    return this.pagesService.getCategories().subscribe(
      (categories) => {
        this.dataSource = categories;
      }
    );
  }
  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.type = 'Category';
    obj.formField = this.categoryFormField;
    console.log("obj", obj);
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.data) {
        console.log("result", result);
        if (result.event === 'Add') {
          this.addCategory(result.data[0]);
        } else if (result.event === 'Edit') {
          this.editCategory(result.data[0]);
        } else if (result.event === 'Delete') {
          //this.deleteCategory(result.data);
        }
      }
      console.log('The dialog was closed');
    });
  }
  addCategory(data: any) {
    this.pagesService.postCategoryData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Adding New Category to Database was Successful!!
          Category Name: ${result.data.category_name}
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
            'Error: Adding New Category to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Adding New Category to Database was Unsuccessful!!',
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
  editCategory(data: any) {
    this.pagesService.putCategoryData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Updating Category to Database was Successful!!
          Category Name: ${result.data.category_name}
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
            'Error: Updating Category to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Updating Category to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  deleteCategory(data: any) {
    console.log(data);
    this.loadTableData();
  }
}
