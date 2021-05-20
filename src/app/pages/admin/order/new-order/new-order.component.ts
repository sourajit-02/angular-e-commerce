import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { OrdersService } from 'src/app/core/admin/services/orders.service';
import { DialogFormComponent } from '../../../../component/admin/components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {
  public currentRoute: string;
  public displayedColumns: Object;
  public newOrdersColumns: Object = {
    all: 'All',
    new: 'New',
    toPack: 'To Pack',
    toDispatch: 'To Dispatch',
    toHandover: 'To Handover',
    inTransit: 'In Transit',
    delivered: 'Delivered',
    rtoInTransit: 'RTO In Transit',
    rtoDelivered: 'RTO Delivered',
    status: 'Active',
    actions: 'Actions',
  };
  public cancelledOrdersColumns: Object = {
    cancelledByBuyer: 'Cancelled By Buyer',
    cancelledBySeller: 'Cancelled By Seller',
  };

  public paginationData: Object = {
    length: 10,
    pageSize: 5,
    pageSizeOptions: [2, 3, 5, 7, 10],
  };
  public dataSource: any;
  public title: string;
  public orders: any[] = [];
  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.getCurrentRoute();
    this.loadTableData();
  }
  getCurrentRoute() {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.currentRoute = params.get('orderType');
        this.loadTableColumns();
      },
      (error) => {
        console.log(error);
        if (error.message) {
          this.toastr.error(
            `${error.message}`,
            'Error: Orders page route Loading Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Orders page route Loading Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  loadTableColumns() {
    if (this.currentRoute === 'new-order') {
      this.displayedColumns = this.newOrdersColumns;
      this.title = 'New Order';
    } else if (this.currentRoute === 'cancelled-order') {
      this.displayedColumns = this.cancelledOrdersColumns;
      this.title = 'Cancelled Order';
    }
  }
  ngOnDestroy() {
    this.loadTableData().unsubscribe();
  }
  loadTableData(): Subscription {
    return this.ordersService.getOrders().subscribe(
      (orders) => {
        if (
          orders &&
          typeof orders[0] === 'object' &&
          orders[0].hasOwnProperty('id')
        ) {
          this.orders = orders;
          this.setTableData(this.orders);
        } else {
          this.orders = [];
          this.toastr.warning(
            'Orders List is either empty or undefined or null. All the Orders are not loaded !!',
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
            'Error: Loading Orders List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Loading orders List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  setTableData(orders: any[]) {
    for (const order of orders) {
      let item: Object = {
        order_name: '',
        status: 'Active',
        actions: ['Edit', 'Delete'],
      };
      Object.keys(order).forEach((key) => {
        item[key] = order[key];
      });
      this.dataSource.push(item);
    }
    this.paginationData['length'] = orders.length;
  }
  openDialog(action: string, obj: any): void {
    obj.action = action;
    obj.type = 'Order';
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '100%',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.data) {
        console.log('Submitted Form Data!!');
        if (result.event === 'Add') {
          // this.addOrder(result.data[0]);
        } else if (result.event === 'Edit') {
          // this.editOrder(result.data[0]);
        } else if (result.event === 'Delete') {
          // this.deleteOrder(result.data);
        }
      }
      console.log('The dialog was closed');
      console.log(result.data);
    });
  }
  addOrder(data: any) {
    this.ordersService.postOrderData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Adding New Order to Database was Successful!!`,
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
            'Error: Adding New Order to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Adding New Order to Database was Unsuccessful!!',
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
  editCategory(data: any) {
    this.ordersService.putOrderData(data).subscribe(
      (result: any) => {
        this.loadTableData();
        console.log(result);
        this.toastr.success(
          `Updating Order to Database was Successful!!`,
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
            'Error: Updating Order to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Updating Order to Database was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  deleteOrder(data: any) {
    console.log(data);
    this.loadTableData();
  }
}
