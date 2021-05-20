import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor() {}
  getTitleImg() {
    return './assets/about/heading-pages-06.jpg';
  }
  getAboutPageImg() {
    return './assets/about/banner-14.jpg';
  }
  getTitleText() {
    return 'About';
  }
}
