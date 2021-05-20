import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import {
  faFacebookF,
  faTwitter,
  faPinterestSquare,
  faGooglePlusG,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { catchError, map, retry, shareReplay } from 'rxjs/operators';
import { MenuModel } from 'src/app/core/models/MenuModel';
import { AppService } from 'src/app/core/services/app.service';
import { WebsiteService } from 'src/app/core/services/website.service';
// import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public faFacebookF = faFacebookF;
  public faTwitter = faTwitter;
  public faPinterestSquare = faPinterestSquare;
  public faGooglePlusG = faGooglePlusG;
  public faInstagram = faInstagram;
  // public items: MenuItem[];
  public isWeb$: Observable<boolean> = this.breakpointObserver
    .observe(['(min-width: 992px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
      catchError(this.app.handleError)
    );
  public isTab$: Observable<boolean> = this.breakpointObserver
    .observe(['(min-width: 576px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
      catchError(this.app.handleError)
    );

  public logoUrl = '../../../assets/logo.png';

  public links: MenuModel[] = [];
  constructor(
    private breakpointObserver: BreakpointObserver,
    private app: AppService,
    private websiteservice: WebsiteService
  ) {}
  ngOnInit(): void {
    this.getCategoryData();
  }
  getCategoryData(): Subscription {
    return this.websiteservice.getCategory().subscribe(
      (data) => {
        if (data.length > 0) {
          data.forEach((element) => {
            let category = { name: element.label, url: '' };
            if (element.children.length > 0) {
              category['layer'] = [];
              element.children.forEach((element1) => {
                let subCategory = { name: element1.label, url: '' };
                if (element1.children.length > 0) {
                  subCategory['layer'] = [];
                  element1.children.forEach((element2) => {
                    let subsubCategory = { name: element2.label, url: '' };
                    subCategory['layer'].push(subsubCategory);
                  });
                }
                category['layer'].push(subCategory);
              });
            }
            this.links.push(category);
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
