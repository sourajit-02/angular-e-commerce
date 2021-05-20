import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { UserDetails } from 'src/app/core/models/UserDetails';
import { OrderDetailService } from 'src/app/core/services/order-detail.service';
import { UserService } from 'src/app/core/services/user.service';

export interface PeriodicElement {
  number: string;
  total: string;
  status: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'pending',
    total: '$1,596.00 for 6 items',
  },
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'completed',
    total: '$1,596.00 for 6 items',
  },
  {
    number: '#9478',
    date: 'Mar 28, 2019',
    status: 'pending',
    total: '$1,596.00 for 6 items',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private orderDetail: OrderDetailService,
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  public userDetails: UserDetails;
  public user_name: string;
  public user_address: string;
  public user_phone: number;
  public user_email: string;
  image = this.orderDetail.image;

  displayedColumns: string[] = ['number', 'date', 'status', 'total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.userService.getUserDetails().subscribe(
      (users: UserDetails) => {
        if (users) {
          this.userDetails = users;
          this.setUserDetails(this.userDetails);
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
          this.toastr.warning(
            'Users List is either empty or undefined or null. All the Users are not loaded !!',
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
            'Error: Loading User List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        } else {
          this.toastr.error(
            `${error}`,
            'Error: Loading User List was Unsuccessful!!',
            {
              closeButton: true,
            }
          );
        }
      }
    );
  }
  setUserDetails(user: UserDetails) {
    this.user_name = user.user_first_name;
    this.user_address = user.user_address;
    this.user_email = user.user_email;
    this.user_phone = parseInt(user.user_phone);
  }
}
