import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/core/admin/services/products.service';

@Component({
  selector: 'app-low-stock',
  templateUrl: './low-stock.component.html',
  styleUrls: ['./low-stock.component.scss'],
})
export class LowStockComponent implements OnInit {
  public tableType: string = 'grid';
  public displayedColumns: Object = {
    product_id: 'Product Id',
    product_title: 'Product Title',
    product_name: 'Product Name',
    product_description: 'Product Description',
    product_quantity: 'Product Quantity',
    product_price: 'Product Price',
    alert_at: 'Alert At',
    discount_price: 'Discount Price',
    config: 'Config',
    sku: 'SKU',
    tax: 'Tax',
    hsn_code: 'HSN Code',
    meta_title: 'Meta Title',
    meta_keyword: 'Meta Keyword',
    meta_description: 'Meta Description',
    custom_tags: 'Custom Tags',
    key_feature_1: 'Key Feature 1',
    key_feature_2: 'Key Feature 2',
    key_feature_3: 'Key Feature 3',
    shipping_info_length: 'Shipping Info Length',
    shipping_info_width: 'Shipping Info Width',
    shipping_info_height: 'Shipping Info Height',
    shipping_info_weight: 'Shipping Info Weight',
    return_days: 'Return Days',
    status: 'Status',
  };
  public paginationData: Object = {
    length: 10,
    pageSize: 5,
    pageSizeOptions: [2, 3, 5, 7, 10],
  };
  public dataSource: any[] = [];
  public products: any[] = [];
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
    return this.productsService.getLowStockProducts().subscribe(
      (products: any[]) => {
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
            'Low Stock Products List is either empty or undefined or null. All the Products are not loaded !!',
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
            'Error: Loading Low Stock Product List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Loading Low Stock Product List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  setTableData(products: any[]) {
    this.dataSource = [];
    for (const product of products) {
      let item: Object = {
        product_id: '',
        product_title: '',
        product_name: '',
        product_description: '',
        product_quantity: 0,
        product_price: 0,
        alert_at: '',
        discount_price: 0,
        config: {},
        sku: '',
        tax: 0,
        hsn_code: '',
        meta_title: '',
        meta_keyword: '',
        meta_description: '',
        custom_tags: '',
        key_feature_1: '',
        key_feature_2: '',
        key_feature_3: '',
        shipping_info_length: 0,
        shipping_info_width: 0,
        shipping_info_height: 0,
        shipping_info_weight: 0,
        return_days: 0,
        status: 'Active',
      };
      Object.keys(product).forEach((key) => {
        item[key] = product[key];
      });
      item['product_id'] = product['id'];
      this.dataSource.push(item);
    }
    this.paginationData['length'] = products.length;
  }
}
