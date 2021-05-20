import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  public list: any[] = [];
  public images: any[] = [];
  ngOnInit(): void {
    this.images = this.getHomeData('slider');
    this.list = this.getHomeData('banner');
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };

  getHomeData(key: string): any[] {
    return this.homeService.getHomeData(key);
  }
}
