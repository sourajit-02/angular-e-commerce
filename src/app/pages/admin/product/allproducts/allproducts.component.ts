import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FormsModel } from 'src/app/core/admin/models/FormsModel';
import { ProductTable } from 'src/app/core/admin/models/ProductTable';
import { ProductsService } from 'src/app/core/admin/services/products.service';
import { IProduct } from 'src/app/core/models/IProduct';
import { DialogFormComponent } from '../../../../component/admin/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],
})
export class AllproductsComponent implements OnInit {
  public productFormField: FormsModel[] = [
    {
      fieldType: 'select',
      label: 'Product Category',
      values: [
        { name: 'Category 1', value: 1 },
        { name: 'Category 2', value: 2 },
      ],
      placeholder: 'Product Category',
      controller: 'product_category',
    },
    {
      fieldType: 'input',
      label: 'Product Title',
      type: 'text',
      value: 'value',
      placeholder: 'Product Title',
      controller: 'product_title',
    },
    {
      fieldType: 'input',
      label: 'Product Name',
      type: 'text',
      value: 'value',
      placeholder: 'Product Name',
      controller: 'product_name',
    },
    {
      fieldType: 'textarea',
      label: 'Product Description',
      type: 'text',
      value: 'value',
      placeholder: 'Product Description',
      controller: 'product_description',
    },
    {
      fieldType: 'input',
      label: 'Product Quantity',
      type: 'number',
      value: 0,
      placeholder: 'Product Quantity',
      controller: 'product_quantity',
      min: 0,
    },
    {
      fieldType: 'input',
      label: 'Product Price',
      type: 'number',
      value: 0,
      placeholder: 'Product Price',
      controller: 'product_price',
      min: 0,
    },
    {
      fieldType: 'input',
      label: 'Discount Price',
      type: 'number',
      value: 0,
      placeholder: 'Discount Price',
      controller: 'discount_price',
      min: 0,
    },
    {
      fieldType: 'input',
      label: 'Config',
      type: 'text',
      value: 'value',
      placeholder: 'Config',
      controller: 'config',
    },
    {
      fieldType: 'input',
      label: 'SKU',
      type: 'text',
      value: 'value',
      placeholder: 'SKU',
      controller: 'sku',
    },
    {
      fieldType: 'input',
      label: 'Tax',
      type: 'number',
      value: 0,
      placeholder: 'Tax',
      controller: 'tax',
      min: 0,
    },
    {
      fieldType: 'input',
      label: 'HSN Code',
      type: 'text',
      value: 'value',
      placeholder: 'HSN Code',
      controller: 'hsn_code',
    },
    {
      fieldType: 'input',
      label: 'Meta Title',
      type: 'text',
      value: 'value',
      placeholder: 'Meta Title',
      controller: 'meta_title',
    },
    {
      fieldType: 'input',
      label: 'Meta Keyword',
      type: 'text',
      value: 'value',
      placeholder: 'Meta Keyword',
      controller: 'meta_keyword',
    },
    {
      fieldType: 'textarea',
      label: 'Meta Description',
      type: 'text',
      value: 'value',
      placeholder: 'Meta Description',
      controller: 'meta_description',
    },
    {
      fieldType: 'input',
      label: 'Custom Tags',
      type: 'text',
      value: 'value',
      placeholder: 'Custom Tags',
      controller: 'custom_tags',
    },
    {
      fieldType: 'input',
      label: 'Key Feature 1',
      type: 'text',
      value: 'value',
      placeholder: 'Key Feature 1',
      controller: 'key_feature_1',
    },
    {
      fieldType: 'input',
      label: 'Key Feature 2',
      type: 'text',
      value: 'value',
      placeholder: 'Key Feature 2',
      controller: 'key_feature_2',
    },
    {
      fieldType: 'input',
      label: 'Key Feature 3',
      type: 'text',
      value: 'value',
      placeholder: 'Key Feature 3',
      controller: 'key_feature_3',
    },
    {
      fieldType: 'input',
      label: 'Shipping Info Length',
      type: 'number',
      value: 30,
      placeholder: 'Shipping Info Length',
      controller: 'shipping_info_length',
      min: 0,
    },
    {
      fieldType: 'input',
      label: 'Shipping Info Width',
      type: 'number',
      value: 30,
      placeholder: 'Shipping Info Width',
      controller: 'shipping_info_width',
      min: 0,
    },
    {
      fieldType: 'input',
      label: 'Shipping Info Height',
      type: 'number',
      value: 30,
      placeholder: 'Shipping Info Height',
      controller: 'shipping_info_height',
      min: 0,
    },
    {
      fieldType: 'input',
      label: 'Shipping Info Weight',
      type: 'number',
      value: 30,
      placeholder: 'Shipping Info Weight',
      controller: 'shipping_info_weight',
      min: 0,
    },
    {
      fieldType: 'input',
      label: 'Return Days',
      type: 'number',
      value: 10,
      placeholder: 'Return Days',
      controller: 'return_days',
      min: 0,
    },
    {
      fieldType: 'input',
      label: 'Product Id',
      type: 'number',
      value: 0,
      placeholder: 'Product Id',
      controller: 'product_id',
      min: 0,
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
  public products: any[] = [];
  public displayedColumns: ProductTable = {
    product_id: 'Product Id',
    product_title: 'Product Title',
    product_name: 'Product Name',
    product_description: 'Product Description',
    product_quantity: 'Product Quantity',
    product_price: 'Product Price',
    discount_price: 'Discount Price',
    sku: 'SKU',
    tax: 'Tax',
    is_active: 'Status',
    actions: 'Actions',
  };
  // shipping_info_length: 'Shipping Info Length',
  // shipping_info_width: 'Shipping Info Width',
  // shipping_info_height: 'Shipping Info Height',
  // shipping_info_weight: 'Shipping Info Weight',
  // return_days: 'Return Days',
  // config: 'Config',
  // hsn_code: 'HSN Code',
  // meta_title: 'Meta Title',
  // meta_keyword: 'Meta Keyword',
  // meta_description: 'Meta Description',
  // custom_tags: 'Custom Tags',
  // key_feature_1: 'Key Feature 1',
  // key_feature_2: 'Key Feature 2',
  // key_feature_3: 'Key Feature 3',

  public dataSource: Object[] = [];
  constructor(
    private productsService: ProductsService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadTableData();
  }

  loadTableData(): Subscription {
    return this.productsService.getProducts().subscribe(
      (products: IProduct[]) => {
        if (
          products &&
          typeof products[0] === 'object' &&
          products[0].hasOwnProperty('id')
        ) {
          this.products = products;
          this.setTableData(this.products);
        } else {
          this.products = [];
          this.toastr.warning(
            'Products List is either empty or undefined or null.All the products are not loaded !!',
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
            'Error: Loading Product List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Loading Product List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  setTableData(products: IProduct[]) {
    this.dataSource = [];
    for (const product of products) {
      let item: Object = {
        product_id: 0,
        product_title: '',
        product_name: '',
        product_description: '',
        product_quantity: 0,
        product_price: 0,
        discount_price: 0,
        sku: '',
        tax: 0,
        shipping_info_length: 0,
        shipping_info_width: 0,
        shipping_info_height: 0,
        shipping_info_weight: 0,
        return_days: 0,
        config: {},
        hsn_code: '',
        meta_title: '',
        meta_keyword: '',
        meta_description: '',
        custom_tags: '',
        key_feature_1: '',
        key_feature_2: '',
        key_feature_3: '',
        is_active: false,
        actions: ['Edit', 'Delete'],
      };
      Object.keys(product).forEach((key) => {
        if (item.hasOwnProperty(key) && product[key]) {
          item[key] = product[key];
        }
      });
      item['product_id'] = product['id'];
      if (product.is_active === 1) {
        item['is_active'] = true;
      } else if (product.is_active === 0) {
        item['is_active'] = false;
      }
      this.dataSource.push(item);
    }
  }
  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.type = 'Product';
    obj.formField = this.productFormField;
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.data) {
        console.log('Submitted Form Data!!');
        if (result.event === 'Add') {
          this.addProduct(result.data[0]);
        } else if (result.event === 'Edit') {
          this.editProduct(result.data[0]);
        } else if (result.event === 'Delete') {
          this.deleteProduct(result.data);
        }
      }
      console.log('The dialog was closed!!');
    });
  }
  addProduct(data: any) {
    let product: IProduct = data;
    product.config = { key: data.config };
    this.productsService.postProductData(product).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Adding New Product to Database was Successful!!
           Product Name: ${result.data.product_name}
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
            'Error: Adding New Product to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Adding New Product to Database was Unsuccessful!!',
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
  editProduct(data: any) {
    let product: IProduct = data;
    product.config = { key: data.config };
    this.productsService.putProductData(product).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Updating Product to Database was Successful!!
           Product Name: ${result.data.product_name}
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
            'Error: Updating Product to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Updating Product to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  deleteProduct(data: any) {
    this.productsService.deleteProductData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Deleting Product from Database was Successful!!
            Product Name: ${result.data.product_name}
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
            'Error: Deleting Product from Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Deleting Product from Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
}
