import { Component, OnInit, HostListener } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faPinterestSquare,
  faGooglePlusG,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor() {}
  public selectedCurrency: string;
  public faFacebookF = faFacebookF;
  public faTwitter = faTwitter;
  public faPinterestSquare = faPinterestSquare;
  public faGooglePlusG = faGooglePlusG;
  public faInstagram = faInstagram;
  public currencyList = [
    { value: 'usd', viewValue: 'USD' },
    { value: 'eur', viewValue: 'EUR' },
    { value: 'gbp', viewValue: 'GBP' },
    { value: 'pkr', viewValue: 'PKR' },
    { value: 'cad', viewValue: 'CAD' },
    { value: 'jpy', viewValue: 'JPY' },
  ];
  ngOnInit(): void {
    this.selectedCurrency = this.currencyList[0].value;
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let topBar = document.getElementById('top-bar');
    if (window.pageYOffset > topBar.clientHeight) {
      topBar.classList.add('hide-topbar');
    } else {
      topBar.classList.remove('hide-topbar');
    }
  }
}
