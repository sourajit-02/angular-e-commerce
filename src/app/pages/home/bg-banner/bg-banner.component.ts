import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-bg-banner',
  templateUrl: './bg-banner.component.html',
  styleUrls: ['./bg-banner.component.scss'],
})
export class BgBannerComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  public list: any[] = [];
  ngOnInit(): void {
    this.list = this.getHomeData('bg-banner');
  }
  getHomeData(key: string): any[] {
    return this.homeService.getHomeData(key);
  }
}
