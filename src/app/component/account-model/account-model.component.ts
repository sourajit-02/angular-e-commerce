import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay, catchError, map } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-account-model',
  templateUrl: './account-model.component.html',
  styleUrls: ['./account-model.component.scss'],
})
export class AccountModelComponent implements OnInit {
  constructor(
    private app: AppService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
  public accountLink = 'account';
  public headerIcon1 = '../../../assets/icon-header-01.png';
  @ViewChild('op') panel: any;
  public isWeb$: Observable<boolean> = this.breakpointObserver
    .observe(['(min-width: 992px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
      catchError(this.app.handleError)
    );
  ngOnInit() {
    this.closeCartOnNavigation();
  }
  closeCartOnNavigation() {
    this.router.events.subscribe((event: object) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.panel.hide();
        // console.log(event);
      }
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        // console.log(event);
      }
      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });
  }
}
